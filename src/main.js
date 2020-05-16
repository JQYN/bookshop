import Vue from "vue"
import Vuex from "vuex"
import App from "./App.vue"
import router from "./router"
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import {accountGet, authRefreshToken} from "./api/api";
import jwt from "jsonwebtoken";
// import {User} from "./model"
import axios from "axios";

Vue.use(Vuex)
Vue.use(ElementUI);
Vue.config.productionTip = false

axios.interceptors.response.use(function (response) {
  return response

}, function (error) {
  if (error.response) {
    if (error.response.status === 401 && error.response.data.code === "token_not_valid") {
      return Promise.resolve(error.response)
    } else if (error.response.status === 401) {
      router.push({
        path: "/login"
      })
    }

  }
  return Promise.reject(error)
})

const store = new Vuex.Store({
  state: {
    user: "",
    token: ""
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload.user
    },
    setToken(state, payload) {
      state.token = payload.token
    }

  },
  getters: {}
})

new Vue({
  store,
  router,
  render: h => h(App),
  methods: "",
  mounted() {
    let token = JSON.parse(localStorage.getItem("token"))

    if (token) {
      authRefreshToken(token.refresh).then(response => {
        if (response.status === 200) {
          store.commit({
            type: "setToken",
            token: response.data
          })
          localStorage.setItem("token", JSON.stringify(response.data))
          let uid = jwt.decode(response.data.access).user_id
          return accountGet(uid)
        }

      }).then(response => {
        if (response.status === 200) {
          localStorage.setItem("user", JSON.stringify(response.data))
          store.commit({
            type: "setUser",
            user: response.data
          })
        }
      }).catch(error => {
        console.log(error)
        if (error.response.status === 401) {
          console.log("Refresh token expire")
          localStorage.removeItem("token")
          localStorage.removeItem("user")
          router.push({name: "login"})

        }
      })

    }

    console.log("App Mounted!")


  }
}).$mount("#app")

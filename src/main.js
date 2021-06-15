import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import { accountGet, authRefreshToken } from "./api";
// import jwt from "jsonwebtoken";
// import axios from "axios";
import store from './store'
import "element-plus/lib/theme-chalk/index.css";
import ElementPlus from 'element-plus';
// import installElementPlus from './plugins/element'


// axios.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     if (error.response) {
//       if (
//         error.response.status === 401 &&
//         error.response.data.code === "token_not_valid"
//       ) {
//         return Promise.resolve(error.response);
//       } else if (error.response.status === 401) {
//         router.push({
//           path: "/login",
//         });
//       }
//     }
//     return Promise.reject(error);
//   }
// );


createApp(App).use(store).use(router).use(ElementPlus).mount("#app");

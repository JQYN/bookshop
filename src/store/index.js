import { createStore } from "vuex";

export default createStore({
  state: {
    user: "",
    token: "",
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload.user;
    },
    setToken(state, payload) {
      state.token = payload.token;
    },
  },
  actions: {},
  modules: {},
});

import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    id: "",
    account: "",
    token: "",
    avatar: ""
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    }
  }
});

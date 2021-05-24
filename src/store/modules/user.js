import { userApi } from "@/service/userApi.js";

const user = {
  state: {
    user: null,
    token: null,
  },
  mutations: {
    setToken: (state, token) => {
      sessionStorage.setItem("token", `Bearer ${token}`);
      state.token = token;
    },
    setUser: (state, user) => {
      state.user = { ...user };
    },
  },
  actions: {
    login: async ({ commit }, user) => {
      const token = await userApi.login(user);
      if (token) {
        commit("setToken", token);
        return true;
      } else {
        return false;
      }
    },
    getUser: async ({ commit }) => {
      const user = await userApi.getUser();
      if (user === undefined) return;
      console.log("user", user);
      commit("setUser", user);
    },
  },
  getters: {
    user: (state) => {
      return state.user;
    },
    token: (state) => {
      return state.token;
    },
  },
};

export default user;

import userApi from "@/service/userApi.js";
import VueCookies from "vue-cookies";

const user = {
  state: {
    user: null,
    token: null,
  },
  mutations: {
    setToken: (state, token) => {
      state.token = token;
      VueCookies.set("token", token);
    },
    setUser: (state, user) => {
      state.user = { ...user };
    },
    deleteUser: (state) => {
      state.user = null;
    },
    deleteToken: (state) => {
      state.token = null;
      VueCookies.remove("token");
    },
  },
  actions: {
    login: async ({ commit }, user) => {
      try {
        const res = await userApi.login(user);
        if (res.status !== 200) {
          throw new Error("서버가 이상합니다.");
        }
        commit("setToken", res.data.token);
        return await res.data.token;
      } catch (error) {
        console.log("login", error);
      }
    },
    getUser: async ({ commit }) => {
      try {
        const res = await userApi.getUser();
        if (res.status !== 200) {
          throw new Error("서버가 이상합니다.");
        }
        commit("setUser", res.data);
        return await res.data;
      } catch (error) {
        console.log("getuser", error);
      }
    },
    updateUser: async ({ commit }, user) => {
      try {
        const res = await userApi.updateUser(user);
        if (res.status !== 200) {
          throw new Error("서버가 이상합니다.");
        }
        commit("setUser", user);
        return true;
      } catch (error) {
        console.log("updateUser in user.js", error);
        if (error.status === 500) {
          return false;
        }
      }
    },
    logout: ({ commit }) => {
      commit("deleteUser");
      commit("deleteToken");
    },
    withdrawal: async ({ commit }) => {
      try {
        const res = await userApi.deleteUser();
        if (res.status !== 200) {
          throw new Error("서버가 이상합니다.");
        }
        commit("deleteUser");
        commit("deleteToken");
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
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

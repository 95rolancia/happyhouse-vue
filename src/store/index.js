import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import user from "./modules/user";
import house from "./modules/house";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { user, house },
  plugins: [
    createPersistedState({
      paths: ["user", "house"],
    }),
  ],
});

import mapApi from "@/service/mapApi.js";

const house = {
  state: {
    houseList: null,
    legalInfo: null,
  },
  mutations: {
    setHoustList: (state, houseList) => {
      state.houseList = houseList;
    },
    setLegalInfo: (state, legalInfo) => {
      state.legalInfo = legalInfo;
    },
  },
  actions: {
    getHouseList: async ({ commit }, loc) => {
      try {
        const res = await mapApi.getHouseList(loc);
        console.log("getHouseList house.js", res);
        commit("setHoustList", res.data);
      } catch (error) {
        console.log(error);
      }
    },
    getLegalInfo: async ({ commit }, loc) => {
      try {
        const res = await mapApi.getLegalInfo(loc);
        console.log("getLegalInfohouse.js", res);
        commit("setLegalInfo", res.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    houseList: (state) => {
      return state.houseList;
    },
    legalInfo: (state) => {
      return state.legalInfo;
    },
  },
};

export default house;

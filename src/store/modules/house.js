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
        console.log("getHouseLIst", res);
        if (res.status !== 200) {
          throw new Error("서버가 이상합니다.");
        }
        console.log("getHouseList house.js", res);
        commit("setHoustList", res.data);
      } catch (error) {
        console.log(error);
      }
    },
    getLegalInfo: async ({ commit }, loc) => {
      try {
        const res = await mapApi.getLegalInfo(loc);
        if (res.status !== 200) {
          throw new Error("서버가 이상합니다.");
        }
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

import axios from "./axios.js";

export default {
  getLoc(address) {
    return axios({
      url: `/map/${address}`,
      method: "get",
    });
  },
  getHouseList(loc) {
    return axios({
      url: "/map",
      params: loc,
      method: "get",
    });
  },
  getLegalInfo(loc) {
    return axios({
      url: "/map/legalcode",
      params: loc,
      method: "get",
    });
  },
};

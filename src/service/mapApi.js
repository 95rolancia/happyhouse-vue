import axios from "./axios.js";

export default {
  getLoc(address) {
    return axios({
      url: `/map/${address}`,
      method: "get",
    });
  },
};

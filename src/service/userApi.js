import axios from "./axios.js";

export default {
  login(user) {
    return axios({
      url: "/jwt/authenticate",
      method: "post",
      data: user,
    });
  },
  getUser() {
    return axios({
      url: "/user",
      method: "get",
    });
  },
  emailDuplicateCheck(email) {
    return axios({
      url: `/user/checkDuplicate/${email}`,
      method: "get",
    });
  },
  signup(user) {
    return axios({
      url: `/user/enroll`,
      method: "post",
      data: user,
    });
  },
  updateUser(user) {
    return axios({
      url: "/user",
      method: "put",
      data: user,
    });
  },
  deleteUser() {
    return axios({
      url: "/user",
      method: "delete",
    });
  },
};

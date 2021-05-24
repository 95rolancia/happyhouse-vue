import axios from "axios";
const API_END_POINT = process.env.VUE_APP_API_END_POINT;

export const userApi = {
  login: async (user) => {
    try {
      const res = await axios.post(`${API_END_POINT}/jwt/authenticate`, user);
      if (res.status !== 200) {
        throw new Error("서버가 이상합니다.");
      }
      axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
      return await res.data.token;
    } catch (error) {
      if (error.response.status === 401) {
        return undefined;
      }
    }
  },

  getUser: async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/user`);
      console.log("getUser: ", res);
      if (res.status !== 200) {
        throw new Error("서버가 이상합니다.");
      }
      return await res.data;
    } catch (error) {
      console.error(error);
    }
  },

  emailDuplicateCheck: async (email) => {
    try {
      const res = await axios.get(`${API_END_POINT}/user/checkDuplicate/${email}`);
      if (res.status !== 200) {
        throw new Error("서버가 이상합니다.");
      }
      if (res.data === "cannot use") return false;
      else if (res.data === "can use") return true;
    } catch (error) {
      console.error(error);
    }
  },

  signup: async (user) => {
    try {
      const res = await axios.post(`${API_END_POINT}/user/enroll`, user);
      if (res.status !== 200) {
        throw new Error("서버가 이상합니다.");
      }
      return await res.data;
    } catch (error) {
      console.error(error);
      return error.response;
    }
  },
};

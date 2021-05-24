import axios from "axios";
import VueCookies from "vue-cookies";

const instance = axios.create({
  baseURL: "http://localhost:9999/happyhouse",
  timeout: 1000,
});

instance.interceptors.request.use(
  (config) => {
    if (VueCookies.get("token")) {
      config.headers["Authorization"] = `Bearer ${VueCookies.get("token")}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      console.log("interceptor", response);
      VueCookies.remove("token");
      alert("You are not authorized");
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  }
);

export default instance;

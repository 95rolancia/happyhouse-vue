import axios from "axios";
import VueCookies from "vue-cookies";
import store from "@/store/index.js";
import router from "../router/index.js";

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
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response.data.message === "Unauthorized") {
      alert("로그인을 하셔야 이용하실 수 있습니다.");
    } else if (
      error.response.data.status === 500 &&
      error.response.data.message === "Access is denied"
    ) {
      store.dispatch("logout");
      VueCookies.remove("token");
      alert("장시간이 지나 로그아웃되었습니다.");
      router.push("/");
    }
    return Promise.reject(error.response);
  }
);

export default instance;

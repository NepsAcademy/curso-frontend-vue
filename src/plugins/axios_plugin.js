import axios from "axios";

export default {
  install(vue) {
    const instance = axios.create({
      baseURL: "http://localhost:5000",
    });

    if (localStorage.getItem("authToken") != null) {
      instance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("authToken")}`;
    }

    // Methods
    instance.storeToken = (token) => {
      localStorage.setItem("authToken", token);
      instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    };

    vue.config.globalProperties.$axios = instance;
  },
};

import axios from "axios";

export default {
  install(vue) {
    const instance = axios.create({
      baseURL: "http://minifeed.neps.academy",
    });

    // Methods
    instance.updateToken = () => {
      if (localStorage.getItem("authToken") != null) {
        instance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${localStorage.getItem("authToken")}`;
      } else {
        instance.defaults.headers.common["Authorization"] = null;
      }
    };

    instance.storeToken = (token) => {
      localStorage.setItem("authToken", token);
      instance.updateToken();
    };

    // Setup
    instance.updateToken();

    vue.config.globalProperties.$axios = instance;
  },
};

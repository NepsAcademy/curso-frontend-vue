import axios from "axios";

export default {
  install(vue) {
    const instance = axios.create({
      baseURL: "http://localhost:5000",
    });

    vue.config.globalProperties.$axios = instance;
  },
};

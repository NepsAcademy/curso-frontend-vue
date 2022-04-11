import axios from "axios";

// https://vuejs.org/guide/reusability/plugins.html#introduction

export default {
  install(vue, opts) {
    console.log(opts);

    const instance = axios.create({
      baseURL: "http://localhost:5000",
    });

    instance.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("authToken");

    // instance.defaults.headers.common["Authorization"] =
    //   "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0OTM1MDgxNSwianRpIjoiMzJiOWRlMDktNDE0OC00MmYzLTkyMDYtMDNiOWQ1OTkwNmRkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IiIsIm5iZiI6MTY0OTM1MDgxNSwiZXhwIjoxNjQ5MzUxNzE1fQ.0N4ZPXEYi_ADZBeR62SOBQm75XG5ea5iJWyFO5QoQaw";

    vue.config.globalProperties.$axios = instance;
  },
};

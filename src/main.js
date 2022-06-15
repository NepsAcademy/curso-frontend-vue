import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import axios_plugin from "./plugins/axios_plugin"; // import the plugin

createApp(App).use(router).use(axios_plugin).mount("#app");

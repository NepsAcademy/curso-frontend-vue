import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

import axios_plugin from "./plugins/axios_plugin"; // import the plugin

loadFonts();

createApp(App).use(router).use(vuetify).use(axios_plugin).mount("#app");

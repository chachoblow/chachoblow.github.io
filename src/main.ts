import { createApp } from "vue";
import App from "./App.vue";
import pinia from "./stores";
import router from "./router";
import VueGtag from "vue-gtag";

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(VueGtag, {
    appName: 'Personal website',
    pageTrackerScreenviewEnabled: true,
    config: { id: "G-BDCX2RTVRT" }
}, router);

app.mount("#app");

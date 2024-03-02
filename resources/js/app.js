import { createApp } from "vue";
import App from "./components/organisms/App.vue";
import "./bootstrap";
import "../css/app.css";

const app = createApp(App);

app.mount("#app");

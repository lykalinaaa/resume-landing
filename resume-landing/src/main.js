import { createApp } from "vue";
import App from "./App.vue";
import PageTitle from "./components/PageTitle.vue";
import PageAboutMe from "./components/PageAboutMe.vue";
import PageSkills from "./components/PageSkills.vue";

const app = createApp(App);
app.component("page-title", PageTitle);
app.component("page-about-me", PageAboutMe);
app.component("page-skills", PageSkills);
app.mount("#app");

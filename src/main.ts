import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "@/assets/base.scss";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram, faGithub, faRedditAlien } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
    faChevronDown,
    faFilm,
    faCar,
    faCode,
    faBrush,
    faMapLocationDot,
    faGamepad,
    faArrowUpRightFromSquare
} from "@fortawesome/free-solid-svg-icons";

const app = createApp(App);

app.use(createPinia());
app.use(router);

library.add(
    faInstagram,
    faGithub,
    faEnvelope,
    faChevronDown,
    faFilm,
    faCar,
    faCode,
    faRedditAlien,
    faBrush,
    faMapLocationDot,
    faGamepad,
    faArrowUpRightFromSquare
);
app.component("FontAwesomeIcon", FontAwesomeIcon);

app.mount("body");

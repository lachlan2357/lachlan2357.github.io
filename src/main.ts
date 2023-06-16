import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

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
    faLink,
    faArrowUpRightFromSquare
} from "@fortawesome/free-solid-svg-icons";

import "@/assets/base.scss";
import LazyImage from "./components/LazyImage.vue";

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
    faLink,
    faArrowUpRightFromSquare
);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.component("lazy-img", LazyImage);

app.mount("body");

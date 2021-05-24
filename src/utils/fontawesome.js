import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faWindowClose);

Vue.component("font-awesome-icon", FontAwesomeIcon);

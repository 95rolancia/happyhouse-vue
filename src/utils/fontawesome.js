import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faWindowClose,
  faUser,
  faChevronDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faWindowClose, faUser, faChevronDown, faSearch);

Vue.component("font-awesome-icon", FontAwesomeIcon);

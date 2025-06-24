// vue
import { createApp } from "vue";

// components
import App from "./App.vue";

// css
import "@/assets/global.css";
import "vue-toastification/dist/index.css";

// plugins
import { createPinia } from "pinia";
import Toast from "vue-toastification";

// icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { iconMap } from "./assets/icons";

// plugins
Object.values(iconMap).forEach((icon) => library.add(icon));
const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(Toast)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

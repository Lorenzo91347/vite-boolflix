import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar as SolStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as RegStar} from '@fortawesome/free-regular-svg-icons';
library.add(SolStar)
library.add(RegStar)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

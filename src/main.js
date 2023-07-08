import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
//theme
//import "primevue/resources/themes/saga-green/theme.css";         
import "primevue/resources/themes/tailwind-light/theme.css";         
//core
import "primevue/resources/primevue.min.css";
import 'primeicons/primeicons.css';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'

createApp(App)
.use(PrimeVue)
.use(store)
.use(router)
.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// sync(store, router);

createApp(App).use(router).mount('#app')

// import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Vuetify from 'vuetify/lib'
// import Vuetify from 'vuetify';
// import 'vuetify/dist/vuetify.min.css';

// Vue.use(Vuetify);

createApp(App).use(router).mount('#app')

// new Vue({
//     el: '#app',
//     router, 
//     template: '<App/>',
//     component: { App }
// })

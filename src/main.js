import App from './App.vue'
import List from "@/components/List.vue";
import * as Vue from 'vue';
import * as VueRouter from 'vue-router';





const routes = [
    { path: '/',component: App},
    { path: '/list',component: List}
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

Vue.createApp(List).use(router).mount('#app');



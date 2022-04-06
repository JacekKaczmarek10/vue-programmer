import App from './App.vue'
import List from "@/components/List.vue";
import * as Vue from 'vue';
import * as VueRouter from 'vue-router';
import About from "@/About";
import Slot from "@/components/Slot";
import Plan from "@/components/Plan";





const routes = [
    { path: '/',component: App},
    { path: '/prop',component: Plan},
    { path: '/event',component: List},
    { path: '/slot',component: Slot},
    { path: '/about',component: About}
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

Vue.createApp(App).use(router).mount('#app');



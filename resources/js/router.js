import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("./Pages/HomeRoute.vue"),
    },
    {
        path: "/cv",
        component: () => import("./Pages/CVRoute.vue"),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/animations",
        name: "Animations",
        component: () => import("@/views/workPages/Animations.vue"),
    },
    {
        path: "/branches",
        name: "Branches",
        component: () => import("@/views/workPages/Branches.vue"),
    },
    {
        path: "/creativeCoding",
        name: "CreativeCoding",
        component: () => import("@/views/workPages/CreativeCoding.vue"),
    },
    {
        path: "/cyclux",
        name: "Cyclux",
        component: () => import("@/views/workPages/Cyclux.vue"),
    },
    {
        path: "/illustrations",
        name: "Illustrations",
        component: () => import("@/views/workPages/Illustrations.vue"),
    },
    {
        path: "/lineCollection",
        name: "LineCollection",
        component: () => import("@/views/workPages/LineCollection.vue"),
    },
    {
        path: "/photography",
        name: "Photography",
        component: () => import("@/views/workPages/Photography.vue"),
    },
    {
        path: "/virtualFixtures",
        name: "VirtualFixtures",
        component: () => import("@/views/workPages/VirtualFixtures.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

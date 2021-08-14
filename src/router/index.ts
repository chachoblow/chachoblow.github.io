import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Work from "../views/Work.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Work",
        component: Work,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/animations",
        name: "Animations",
        component: () => import("../views/WorkPages/Animations.vue"),
    },
    {
        path: "/branches",
        name: "Branches",
        component: () => import("../views/WorkPages/Branches.vue"),
    },
    {
        path: "/creativeCoding",
        name: "CreativeCoding",
        component: () => import("../views/WorkPages/CreativeCoding.vue"),
    },
    {
        path: "/cyclux",
        name: "Cyclux",
        component: () => import("../views/WorkPages/Cyclux.vue"),
    },
    {
        path: "/findNEO",
        name: "FindNEO",
        component: () => import("../views/WorkPages/FindNEO.vue"),
    },
    {
        path: "/illustrations",
        name: "Illustrations",
        component: () => import("../views/WorkPages/Illustrations.vue"),
    },
    {
        path: "/lineCollection",
        name: "LineCollection",
        component: () => import("../views/WorkPages/LineCollection.vue"),
    },
    {
        path: "/photography",
        name: "Photography",
        component: () => import("../views/WorkPages/Photography.vue"),
    },
    {
        path: "/virtualFixtures",
        name: "VirtualFixtures",
        component: () => import("../views/WorkPages/VirtualFixtures.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

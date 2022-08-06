import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Animations from "@/views/workPages/Animations.vue";
import Branches from "@/views/workPages/Branches.vue";
import CreativeCoding from "@/views/workPages/CreativeCoding.vue";
import Cyclux from "@/views/workPages/Cyclux.vue";
import Illustrations from "@/views/workPages/Illustrations.vue";
import LineCollection from "@/views/workPages/LineCollection.vue";
import Photography from "@/views/workPages/Photography.vue";
import VirtualFixtures from "@/views/workPages/VirtualFixtures.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/animations",
        name: "Animations",
        component: Animations,
    },
    {
        path: "/branches",
        name: "Branches",
        component: Branches,
    },
    {
        path: "/creativeCoding",
        name: "CreativeCoding",
        component: CreativeCoding,
    },
    {
        path: "/cyclux",
        name: "Cyclux",
        component: Cyclux,
    },
    {
        path: "/illustrations",
        name: "Illustrations",
        component: Illustrations,
    },
    {
        path: "/lineCollection",
        name: "LineCollection",
        component: LineCollection,
    },
    {
        path: "/photography",
        name: "Photography",
        component: Photography,
    },
    {
        path: "/virtualFixtures",
        name: "VirtualFixtures",
        component: VirtualFixtures,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

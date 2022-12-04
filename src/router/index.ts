import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import WorkPageAnimations from "@/views/workPages/WorkPageAnimations.vue";
import WorkPageBranches from "@/views/workPages/WorkPageBranches.vue";
import WorkPageCreativeCoding from "@/views/workPages/WorkPageCreativeCoding.vue";
import WorkPageCyclux from "@/views/workPages/WorkPageCyclux.vue";
import WorkPageIllustrations from "@/views/workPages/WorkPageIllustrations.vue";
import WorkPageLineCollection from "@/views/workPages/WorkPageLineCollection.vue";
import WorkPagePhotography from "@/views/workPages/WorkPagePhotography.vue";
import WorkPageVirtualFixtures from "@/views/workPages/WorkPageVirtualFixtures.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/animations",
        name: "Animations",
        component: WorkPageAnimations,
    },
    {
        path: "/branches",
        name: "Branches",
        component: WorkPageBranches,
    },
    {
        path: "/creativeCoding",
        name: "CreativeCoding",
        component: WorkPageCreativeCoding,
    },
    {
        path: "/cyclux",
        name: "Cyclux",
        component: WorkPageCyclux,
    },
    {
        path: "/illustrations",
        name: "Illustrations",
        component: WorkPageIllustrations,
    },
    {
        path: "/lineCollection",
        name: "LineCollection",
        component: WorkPageLineCollection,
    },
    {
        path: "/photography",
        name: "Photography",
        component: WorkPagePhotography,
    },
    {
        path: "/virtualFixtures",
        name: "VirtualFixtures",
        component: WorkPageVirtualFixtures,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});

export default router;

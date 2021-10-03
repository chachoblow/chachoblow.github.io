<template>
    <div class="works-container">
        <ul class="work-items">
            <li v-for="work in works" :key="work.title">
                <router-link
                    :to="work.routerLink"
                    v-slot="{ href, navigate }"
                    custom
                >
                    <a
                        :href="href"
                        @click="navigate"
                        @mouseenter="showImage(work)"
                        @mouseleave="hideImage(work)"
                        @mousemove="updateImage(work)"
                        class="work-item"
                        :id="work.id"
                    >
                        <span class="work-item-title">
                            <span>{{ work.title }}</span>
                        </span>
                        <span class="work-item-description">
                            <span>{{ work.description }}</span>
                        </span>
                        <span class="work-item-icon">
                            <img :src="workIcon" />
                        </span>
                        <!-- <span class="hover-image-container">
                            <div class="hover-image">
                                <img :src="work.image" />
                            </div>
                        </span> -->
                    </a>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { WorkConfig } from "@/model/WorkConfig";
import { workModule } from "@/store/WorkModule";
import { gsap } from "gsap";

interface AnimatableProperties {
    tx: AnimateStatus;
    ty: AnimateStatus;
    rotation: AnimateStatus;
    brightness: AnimateStatus;
}

interface AnimateStatus {
    previous: number;
    current: number;
    amount: number;
}

export default class CategoryWork extends Vue {
    private workIcon = require("@/assets/icons/external-link.jpg");
    private animatableProperties: AnimatableProperties = {
        tx: { previous: 0, current: 0, amount: 0.08 },
        ty: { previous: 0, current: 0, amount: 0.08 },
        rotation: { previous: 0, current: 0, amount: 0.08 },
        brightness: { previous: 1, current: 1, amount: 0.08 },
    };

    private get works(): WorkConfig[] {
        return workModule.workConfigs;
    }

    mounted(): void {
        this.showWorkItems();
    }

    private showWorkItems(): void {
        const tl = gsap.timeline();

        // tl.set(".work-item, .work-items li", {
        //     opacity: 0,
        // });

        // tl.to(".work-items li", {
        //     duration: 1,
        //     ease: "easeOut",
        //     scaleX: 1,
        //     opacity: 1,
        //     transformOrigin: "left",
        //     startAt: { scaleX: 0, opacity: 0 },
        // });

        // tl.to(".work-item", {
        //     duration: 1.2,
        //     startAt: { opacity: 0 },
        //     opacity: 1,
        //     delay: (pos) => pos * 0.1,
        // });
    }

    private showImage(work: WorkConfig): void {
        // TODO: killTweensOf?
        //     const timeline = gsap.timeline();
        //     timeline.set("#" + work.id + " .hover-image-container", { opacity: 1 });
        //     timeline.to("#" + work.id + " .hover-image-container", {
        //         duration: 0.1,
        //         startAt: { y: "0%" },
        //         scaleY: "100%",
        //         transformOrigin: "top",
        //     });
        //     console.log("Show image: " + work.title);
    }

    private hideImage(work: WorkConfig): void {
        //     const timeline = gsap.timeline();

        //     timeline.to("#" + work.id + " .hover-image-container", {
        //         duration: 0.1,
        //         startAt: { y: "100%" },
        //         scaleY: "0%",
        //         transformOrigin: "bottom",
        //     });
        //timeline.set("#" + work.id + " .hover-image-container", { opacity: 0 });
        console.log("Hide image: " + work.title);
    }

    private updateImage(work: WorkConfig): void {
        console.log("Update image: " + work.title);
    }
}
</script>

<style scoped lang="scss">
li {
    width: initial;
    border-top: 1px solid black;
    padding: 0;

    &:first-of-type {
        border-top: none;
    }
}

a {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 10px 0;

    span:first-of-type {
        flex-grow: 2;
    }
}

.work-item {
    &-title {
        font-size: 1.5rem;
    }

    &-description {
        padding-right: 100px;
    }

    &-icon img {
        height: 20px;
    }
}

// .hover-image-container {
//     position: absolute;
//     width: 400px;
//     height: 300px;
//     top: 0;
//     right: 0;
//     pointer-events: none;
//     opacity: 0;
// }

// .hover-image {
//     position: relative;
//     background-size: cover;
//     background-position: 50% 50%;
//     width: 100%;
//     height: 100%;
// }

// img {
//     width: 100%;
//     height: 100%;
//     position: relative;
//     object-fit: contain;
// }

// .hover-reveal {
//     position: absolute;
//     width: 220px;
//     height: 320px;
//     bottom: 0;
//     right: 0;
//     pointer-events: none;
//     opacity: 0;
// }

// .hover-reveal-inner {
//     overflow: hidden;
// }

// .hover-reveal-img {
//     background-size: cover;
//     background-position: 50% 50%;
// }

// .hover-reveal-inner,
// .hover-reveal-img {
//     width: 100%;
//     height: 100%;
//     position: relative;
// }
</style>

<template>
    <div class="work-mosaic">
        <template v-for="work in works" :key="work.id">
            <RouterLink
                v-for="(image, index) in work.thumbnails"
                :key="image"
                :to="work.routerLink"
                v-slot="{ href, navigate }"
                custom
            >
                <a
                    :id="`mosaicImage-${work.id}-${index}`"
                    :href="href"
                    :class="imageContainerClasses(work.id)"
                    @click="navigate"
                    @mouseenter="handleMouseEnter(work.id)"
                    @mouseleave="handleMouseLeave(work.id)"
                >
                    <img :src="image" rel="preload" />
                </a>
            </RouterLink>
        </template>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { WorkConfig } from "@/model/WorkConfig";
import { mapStores } from "pinia";
import { useWorkStore } from "@/stores/work";
import gsap from "gsap";
import { ScrollToPlugin, Linear } from "gsap/all";

export default defineComponent({
    props: {
        routerLinkHover: {
            type: String,
            required: true,
        },
    },
    emits: {
        mosaicHover(payload: { workId: string }) {
            return payload.workId.length >= 0;
        },
    },
    computed: {
        works(): WorkConfig[] {
            return this.workStore.workConfigs;
        },
        ...mapStores(useWorkStore),
    },
    watch: {
        routerLinkHover(newValue: string) {
            gsap.registerPlugin(ScrollToPlugin);
            if (newValue) {
                gsap.to(`.image-container:not(.image-container-${newValue})`, {
                    opacity: 0.1,
                    duration: 1.5,
                });
                const offsetY =
                    document.getElementById("navigationHeader")?.offsetHeight ??
                    0;
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: `#mosaicImage-${newValue}-0`,
                        offsetY: offsetY,
                    },
                    ease: "power2.inOut",
                });
            } else {
                gsap.to(".image-container", { opacity: 1, duration: 1.5 });
            }
        },
    },
    methods: {
        imageContainerClasses(workId: string): string[] {
            return ["image-container", `image-container-${workId}`];
        },
        handleMouseEnter(workId: string): void {
            this.workStore.setWorkId(workId);
            this.$emit("mosaicHover", { workId: workId });
        },
        handleMouseLeave(): void {
            this.workStore.setWorkId("");
            this.$emit("mosaicHover", { workId: "" });
        },
    },
});
</script>

<style scoped lang="scss">
.work-mosaic {
    display: flex;
    flex-wrap: wrap;
    padding: 0 $page-padding 50px 33%;

    > div {
        line-height: 0;
    }
}

img {
    height: 115px;
    object-fit: contain;
    object-position: top left;
}
</style>

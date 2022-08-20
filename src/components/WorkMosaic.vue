<template>
    <div class="work-mosaic">
        <template v-for="work in works" :key="work.id">
            <RouterLink
                v-for="image in work.thumbnails"
                :key="image"
                :to="work.routerLink"
                v-slot="{ href, navigate }"
                custom
                :class="imageContainerClasses(work.id)"
            >
                <a
                    :href="href"
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
            if (newValue) {
                const t1 = gsap.timeline();

                t1.to(`.image-container:not(.image-container-${newValue})`, {
                    opacity: 0,
                    duration: 0.5,
                });
                t1.to(`.image-container-${newValue}`, {
                    x: () => window.innerWidth / 2,
                    y: () => window.innerHeight / 2,
                });
                // t1.to(`.image-container-${newValue}`, {
                //     position: "absolute",
                //     duration: 5,
                // });
                // gsap.to(`.image-container:not(.image-container-${newValue})`, {
                //     opacity: 0,
                //     duration: 0.5,
                // });
                // gsap.to(`.image-container-${newValue}`, {
                //     position: "absolute",
                //     duration: 5,
                // });
            } else {
                gsap.to(".image-container", {
                    opacity: 1,
                    duration: 0.5,
                    position: "static",
                    display: "block",
                });
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
    padding-bottom: 50px;
    padding-left: 33%;

    > div {
        line-height: 0;
    }
}

img {
    height: 125px;
    width: 100%;
    object-fit: contain;
    object-position: top left;
}
</style>

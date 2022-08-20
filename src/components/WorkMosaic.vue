<template>
    <div class="work-mosaic">
        <template v-for="work in works" :key="work.id">
            <div
                v-for="image in work.thumbnails"
                :key="image"
                class="image-container"
                @mouseenter="handleMouseEnter(work.id)"
                @mouseleave="handleMouseLeave(work.id)"
            >
                <img
                    :src="image"
                    :style="workContainerStyle(work.id)"
                    rel="preload"
                />
            </div>
        </template>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { WorkConfig } from "@/model/WorkConfig";
import { workModule } from "@/store/WorkModule";
import gsap from "gsap";

export default defineComponent({
    computed: {
        works(): WorkConfig[] {
            return workModule.workConfigs;
        },
    },
    methods: {
        workContainerStyle(workId: string): object {
            const styleObject = {
                filter: "",
            };
            if (workModule.workId === workId) {
                styleObject.filter = "blur(4px)";
            }
            return styleObject;
        },
        handleMouseEnter(workId: string): void {
            workModule.setWorkId(workId);
            gsap.to(".router-work-link", { opacity: 0.15, duration: 0.25 });
        },
        handleMouseLeave(): void {
            workModule.setWorkId("");
            gsap.to(".router-work-link", { opacity: 1, duration: 0.25 });
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

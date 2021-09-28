<template>
    <!-- <img
        v-show="showHoverImage"
        :src="hoverImageUrl"
        :style="{ left: hoverPositionX + 'px', top: hoverPositionY + 'px' }"
        class="hover-image"
    /> -->
    <category-frame :title="'Work'" :extra-classes="['category-work']">
        <ul>
            <li
                v-for="work in works"
                :key="work.title"
                @mouseenter="initializeImage(work.image, work.associatedWork)"
                @mousemove="updateImagePosition($event)"
                @mouseleave="uninitializeImage()"
            >
                <router-link
                    :to="work.routerLink"
                    v-slot="{ href, navigate }"
                    custom
                >
                    <a
                        :href="href"
                        @click="navigate"
                        v-html="perWordSpan(work.title)"
                    ></a>
                </router-link>
            </li>
        </ul>
    </category-frame>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import CategoryFrame from "@/components/home/CategoryFrame.vue";
import { WorkConfig, Works } from "@/model/WorkConfig";
import { workModule } from "@/store/WorkModule";
import { perWordSpan } from "@/helpers/text";

@Options({
    components: {
        CategoryFrame,
    },
})
export default class CategoryWork extends Vue {
    private showHoverImage = false;
    private hoverImageUrl = "";
    private hoverPositionX = 0;
    private hoverPositionY = 0;

    private get works(): WorkConfig[] {
        return workModule.workConfigs;
    }

    private perWordSpan(text: string): string {
        return perWordSpan(text);
    }

    private initializeImage(url: string, associatedWork: Works): void {
        this.showHoverImage = true;
        this.hoverImageUrl = url;
        workModule.setHoverWork(associatedWork);
    }

    private updateImagePosition(event: MouseEvent): void {
        this.hoverPositionX = event.clientX - 40;
        this.hoverPositionY = event.clientY - 150;
    }

    private uninitializeImage(): void {
        this.showHoverImage = false;
        workModule.clearHoverWork();
    }
}
</script>

<style lang="scss">
.category-work {
    z-index: 2;
}

.hover-image {
    position: absolute;
    z-index: 1;
    pointer-events: none;
    display: none;
    width: 200px;
    height: auto;

    @media (min-width: $small-device-width) {
        display: initial;
    }
}
</style>

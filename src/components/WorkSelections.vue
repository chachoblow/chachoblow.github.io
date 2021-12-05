<template>
    <div class="work-selections">
        <div class="work-router-links">
            <div
                v-for="work in works"
                :key="work.title"
                class="work-router-link"
            >
                <router-link
                    :to="work.routerLink"
                    v-slot="{ href, navigate }"
                    custom
                >
                    <a
                        :href="href"
                        @click="navigate"
                        @mouseover="handleMouseOver(work)"
                        @mouseleave="handleMouseLeave()"
                        >{{ work.title }}</a
                    >
                </router-link>
            </div>
        </div>
        <div
            class="work-thumbnail-container"
            :style="{ height: `calc(100vh - ${headerHeight}px - 20px)` }"
        >
            <img
                v-if="thumbnailImage"
                class="work-thumbnail"
                :src="thumbnailImage"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { WorkConfig } from "@/model/WorkConfig";
import { workModule } from "@/store/WorkModule";

export default class CategoryWork extends Vue {
    private thumbnailImage = "";
    private headerHeight = 100;

    private get works(): WorkConfig[] {
        return workModule.workConfigs;
    }

    private get thumbnailBackground(): string {
        return this.thumbnailImage ? `url("${this.thumbnailImage}")` : "none";
    }

    private handleMouseOver(work: WorkConfig): void {
        this.thumbnailImage = work.imageMenuFull;
        const header = document.getElementsByClassName(
            "navigation-header-container"
        )[0];
        this.headerHeight = header.clientHeight;
    }

    private handleMouseLeave(): void {
        this.thumbnailImage = "";
    }
}
</script>

<style scoped lang="scss">
.work-selections {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.work-router-links {
    width: 33%;
}

.work-router-link {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    + .work-router-link {
        padding-top: 10px;
    }
}

a {
    width: fit-content;
}

.work-thumbnail-container {
    flex-grow: 2;
    max-height: calc(66vw * 0.66);
    width: 66%;
    display: none;

    @media (min-width: $small-device-width) {
        display: block;
    }
}

.work-thumbnail {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: top left;
}
</style>

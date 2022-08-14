<template>
    <div class="work-mosaic">
        <div v-for="work in works" :key="work.id">
            <div
                v-for="image in work.images"
                :key="image"
                class="image-container"
            >
                <img :src="image" rel="preload" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { WorkConfig } from "@/model/WorkConfig";
import { workModule } from "@/store/WorkModule";

export default class CategoryWork extends Vue {
    private thumbnailImage = "";
    private headerHeight = 0;

    private get works(): WorkConfig[] {
        return workModule.workConfigs;
    }

    private get thumbnailBackground(): string {
        return this.thumbnailImage ? `url("${this.thumbnailImage}")` : "none";
    }
}
</script>

<style scoped lang="scss">
.work-mosaic {
    display: flex;
    flex-wrap: wrap;

    > div {
        display: contents;
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

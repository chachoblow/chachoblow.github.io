<template>
    <div class="work-mosaic">
        <template v-for="work in works" :key="work.id">
            <div
                v-for="image in work.thumbnails"
                :key="image"
                class="image-container"
                @mouseenter="handleMouseEnter(work.id)"
                @mouseleave="handleMouseLeave"
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
import { Vue } from "vue-class-component";
import { WorkConfig } from "@/model/WorkConfig";
import { workModule } from "@/store/WorkModule";

export default class CategoryWork extends Vue {
    private get works(): WorkConfig[] {
        return workModule.workConfigs;
    }

    private workContainerStyle(workId: string): object {
        const styleObject = {
            filter: "",
        };
        if (workModule.workId === workId) {
            styleObject.filter = "blur(4px)";
        }
        return styleObject;
    }

    private handleMouseEnter(workId: string): void {
        workModule.setWorkId(workId);
    }

    private handleMouseLeave(): void {
        workModule.setWorkId("");
    }
}
</script>

<style scoped lang="scss">
.work-mosaic {
    display: flex;
    flex-wrap: wrap;

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

.work-hover::v-deep {
    filter: blur(4px);
}
</style>

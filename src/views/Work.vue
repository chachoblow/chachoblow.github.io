<template>
    <div class="tag-selection-container">
        <div class="tag-selection-inputs">
            <div v-for="tag in availableTags" :key="tag">
                <input
                    type="checkbox"
                    :id="tag"
                    :value="tag"
                    v-model="selectedTags"
                />
                <label :for="tag">{{ tag }}</label>
            </div>
        </div>
        <span class="tag-selection-count">
            {{ selectedThumbnailConfigs.length }} works
        </span>
    </div>
    <div class="work-thumbnails-container">
        <work-thumbnail
            v-for="thumbnailConfig in selectedThumbnailConfigs"
            :key="thumbnailConfig.title"
            :work-thumbnail-config="thumbnailConfig"
        >
        </work-thumbnail>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import WorkThumbnail from "@/components/WorkThumbnail.vue";
import {
    WorkThumbnailConfig,
    workThumbnailConfigs,
} from "@/model/WorkThumbnailConfig";

@Options({
    components: {
        WorkThumbnail,
    },
})
export default class Work extends Vue {
    private thumbnailConfigs = workThumbnailConfigs();
    private selectedTags: string[] = [];

    private get availableTags(): string[] {
        const tags = new Set();

        for (const thumbnail of this.thumbnailConfigs) {
            thumbnail.tags.forEach((tag) => tags.add(tag));
        }

        return Array.from(tags) as string[];
    }

    private get selectedThumbnailConfigs(): WorkThumbnailConfig[] {
        const selectedThumbnailConfigs =
            this.selectedTags.length === 0
                ? this.thumbnailConfigs
                : this.filterThumbnailsBySelectedTags();

        return this.orderThumbnails(selectedThumbnailConfigs);
    }

    private filterThumbnailsBySelectedTags(): WorkThumbnailConfig[] {
        const selectedThumbnailConfigsSet = new Set<WorkThumbnailConfig>();

        for (const thumbnailConfig of this.thumbnailConfigs) {
            const relevantThumbnail = thumbnailConfig.tags.some((tag) =>
                this.selectedTags.includes(tag)
            );
            if (relevantThumbnail) {
                selectedThumbnailConfigsSet.add(thumbnailConfig);
            }
        }

        return Array.from(selectedThumbnailConfigsSet);
    }

    private orderThumbnails(
        thumbnails: WorkThumbnailConfig[]
    ): WorkThumbnailConfig[] {
        return thumbnails.sort(function (a, b) {
            return a.order - b.order;
        });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.work-thumbnails-container {
    padding: 0 25px;

    @media (min-width: $small-device-width) {
        padding: 0 20px;
    }
}

label {
    border: none;
    margin: 0;
    text-decoration: none;
    background: #fff;
    cursor: pointer;
    padding-right: 10px;

    &:checked {
        font-style: italic;
    }
}

.tag-selection-container {
    display: flex;
    justify-content: space-between;
    padding: 0 60px;
}

.tag-selection-inputs {
    display: flex;
}
</style>

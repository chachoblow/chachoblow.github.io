<template>
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
import { WorkThumbnailConfig } from "@/model/WorkThumbnailConfig";
import { workModule } from "@/store/WorkModule";

@Options({
    components: {
        WorkThumbnail,
    },
})
export default class Work extends Vue {
    private get selectedThumbnailConfigs(): WorkThumbnailConfig[] {
        return workModule.selectedThumbnailConfigs;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.work-thumbnails-container {
    max-width: 1000px;
    margin: auto;
    padding: 0 10px;

    @media (min-width: $small-device-width) {
        padding: 40px 20px;
    }
}
</style>

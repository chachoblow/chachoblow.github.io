<template>
    <div class="work-thumbnails-container">
        <work-thumbnail
            v-for="thumbnailConfig in thumbnailConfigs"
            :key="thumbnailConfig.title"
            :work-thumbnail-config="thumbnailConfig"
        >
        </work-thumbnail>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import WorkThumbnail from "@/components/WorkThumbnail.vue";
import { workThumbnailConfigs } from "@/model/WorkThumbnailConfig";

@Options({
    components: {
        WorkThumbnail,
    },
})
export default class Work extends Vue {
    private thumbnailConfigs = workThumbnailConfigs();
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.work-thumbnails-container {
    padding: 125px 25px 20px 25px;

    @media (min-width: $small-device-width) {
        padding: 125px 0 20px 0;
    }
}
</style>

<template>
    <work-page-frame
        :title="title"
        :details="details"
        :associatedWork="associatedWork"
    >
        <slot>
            <div
                v-for="image in images"
                :key="image"
                class="gallery-image-container"
            >
                <img :src="image" />
            </div>
        </slot>
    </work-page-frame>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { WorkPageGalleryProps } from "@/model/WorkPage";
import WorkPageFrame from "@/components/work/WorkPageFrame.vue";

@Options({
    components: {
        WorkPageFrame,
    },
})
export default class WorkPageGallery extends Vue.with(WorkPageGalleryProps) {}
</script>

<style lang="scss">
.gallery-image-container {
    width: 100%;
    height: 100%;

    @media (min-width: $small-device-width) {
        max-height: 80vh;
        max-width: 900px;
    }

    + .gallery-image-container {
        margin-top: 20px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: left;
    }
}
</style>

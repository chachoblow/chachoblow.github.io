<template>
    <work-page-frame
        :title="title"
        :details="details"
        :associatedWork="associatedWork"
    >
        <slot>
            <div class="work-gallery-content">
                <div v-for="image in images" :key="image">
                    <img :src="image" />
                </div>
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
.work-gallery-content {
    display: flex;
    flex-direction: column;
    max-width: 800px;
    width: 100%;

    div {
        width: 100%;
        height: 100%;

        + div {
            padding-top: 40px;
        }

        @media (min-width: $small-device-width) {
            max-height: 75vh;
        }
    }

    img {
        object-fit: contain;
        max-height: 100%;
        max-width: 100%;
    }
}
</style>

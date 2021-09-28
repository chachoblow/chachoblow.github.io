<template>
    <work-page-frame
        :title="title"
        :details="details"
        :associatedWork="associatedWork"
    >
        <slot>
            <div :class="imageContainerClasses">
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
export default class WorkPageGallery extends Vue.with(WorkPageGalleryProps) {
    private get imageContainerClasses(): string[] {
        let classes = ["work-gallery-content"];
        classes = this.portaitAspectRatio
            ? classes.concat("portait-aspect-ratio")
            : classes.concat("landscape-aspect-ratio");
        return classes;
    }
}
</script>

<style lang="scss">
$large-device-content-width: 350px;
$orientation-switch-width: 1000px;

.work-gallery-content {
    display: flex;
    flex-direction: column;

    .portait-aspect-ratio {
        height: auto;
    }

    .landscape-aspect-ratio {
        height: calc(100vh - 150px);
    }

    div {
        width: calc(100% - $large-device-content-width);
        max-width: 800px;
    }

    img {
        object-fit: contain;
        max-height: 100%;
        max-width: 100%;
    }
}
</style>

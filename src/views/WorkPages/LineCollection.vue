<template>
    <work-page-gallery
        :title="title"
        :details="details"
        :images="images"
        :associatedWork="associatedWork"
    ></work-page-gallery>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import WorkPageGallery from "@/components/work/WorkPageGallery.vue";
import { Works } from "@/model/WorkConfig";

@Options({
    components: {
        WorkPageGallery,
    },
})
export default class LineCollection extends Vue {
    private title = "Line collection";
    private details = ["2018", "Digital, software, design"];
    private images = [
        require("../../assets/line-collection/arrange-circles.gif"),
        require("../../assets/line-collection/line-collection-arrange.gif"),
        require("../../assets/line-collection/watch-circles.gif"),
        require("../../assets/line-collection/watch-squares.gif"),
        require("../../assets/line-collection/watch-triangles.gif"),
    ];
    private associatedWork = Works.LineCollection;
}
</script>

<style lang="scss"></style>

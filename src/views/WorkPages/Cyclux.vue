<template>
    <work-page-gallery
        :title="title"
        :details="details"
        :images="images"
        :portaitAspectRatio="portaitAspectRatio"
        :associatedWork="associatedWork"
    >
    </work-page-gallery>
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
export default class Cyclux extends Vue {
    private title = "Cyclux";
    private details = ["2018", "Pencil, highlighter, and collage", "12 pages"];
    private images = [
        require("../../assets/comics/cyclux/spread-1-1000.jpg"),
        require("../../assets/comics/cyclux/spread-2-1000.jpg"),
        require("../../assets/comics/cyclux/spread-3-1000.jpg"),
        require("../../assets/comics/cyclux/spread-4-1000.jpg"),
        require("../../assets/comics/cyclux/spread-5-1000.jpg"),
        require("../../assets/comics/cyclux/spread-6-1000.jpg"),
    ];
    private portaitAspectRatio = false;
    private associatedWork = Works.Cyclux;
}
</script>

<style lang="scss"></style>

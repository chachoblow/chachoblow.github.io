<template>
    <work-page-gallery
        :title="title"
        :details="details"
        :images="images"
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
        require("../../assets/comics/cyclux/cyclux-spread1.png"),
        require("../../assets/comics/cyclux/cyclux-spread2.png"),
        require("../../assets/comics/cyclux/cyclux-spread3.png"),
        require("../../assets/comics/cyclux/cyclux-spread4.png"),
        require("../../assets/comics/cyclux/cyclux-spread5.png"),
        require("../../assets/comics/cyclux/cyclux-spread6.png"),
    ];
    private associatedWork = Works.Cyclux;
}
</script>

<style lang="scss"></style>

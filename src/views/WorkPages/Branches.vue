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
export default class Branches extends Vue {
    private title = "Branches";
    private details = ["2018", "Digital", "12 pages"];
    private images = [
        require("../../assets/comics/branches/branches-page1.png"),
        require("../../assets/comics/branches/branches-page2.png"),
        require("../../assets/comics/branches/branches-page3.png"),
        require("../../assets/comics/branches/branches-page4.png"),
        require("../../assets/comics/branches/branches-page5.png"),
        require("../../assets/comics/branches/branches-page6.png"),
        require("../../assets/comics/branches/branches-page7.png"),
    ];
    private associatedWork = Works.Branches;
}
</script>

<style lang="scss"></style>

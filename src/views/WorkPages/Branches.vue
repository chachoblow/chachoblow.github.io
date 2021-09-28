<template>
    <work-page-gallery
        :title="title"
        :details="details"
        :images="images"
        :portaitAspectRatio="portaitAspectRatio"
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
        require("../../assets/comics/branches/branches-page01.png"),
        require("../../assets/comics/branches/branches-page02.png"),
        require("../../assets/comics/branches/branches-page03.png"),
        require("../../assets/comics/branches/branches-page04.png"),
        require("../../assets/comics/branches/branches-page05.png"),
        require("../../assets/comics/branches/branches-page06.png"),
        require("../../assets/comics/branches/branches-page07.png"),
    ];
    private portaitAspectRatio = false;
    private associatedWork = Works.Branches;
}
</script>

<style lang="scss"></style>

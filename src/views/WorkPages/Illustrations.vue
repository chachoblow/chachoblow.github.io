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
export default class Illustrations extends Vue {
    private title = "Illustrations";
    private details = ["2018-present", "Digital"];
    private images = [
        require("../../assets/illustrations/bat-person-1080h.png"),
        require("../../assets/illustrations/breaking-bad-1500h.jpg"),
        require("../../assets/illustrations/can-you-hear-me-1800h.jpg"),
        require("../../assets/illustrations/fried-1381h.jpg"),
        require("../../assets/illustrations/man-rock-900h.png"),
        require("../../assets/illustrations/woman-cursive-900h.png"),
        require("../../assets/illustrations/yellow-vision-1800h.jpg"),
    ];
    private portaitAspectRatio = true;
    private associatedWork = Works.Illustrations;
}
</script>

<style lang="scss"></style>

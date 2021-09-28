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
export default class Photography extends Vue {
    private title = "Photography";
    private details = ["2015-present", "Digital"];
    private images = [
        require("../../assets/photographs/brittany-driving-1000h.jpg"),
        require("../../assets/photographs/dad-grandpa-1000h.jpg"),
        require("../../assets/photographs/grandma-chandelier-1000h.jpg"),
        require("../../assets/photographs/grandparents-window-1000h.jpg"),
        require("../../assets/photographs/grapevine-1000h.jpg"),
        require("../../assets/photographs/laguna-algea-1000h.jpg"),
        require("../../assets/photographs/laguna-rock-1000h.jpg"),
        require("../../assets/photographs/me-bathroom-1000h.jpg"),
        require("../../assets/photographs/megan-dad-2-1000h.jpg"),
        require("../../assets/photographs/slit-scanning-1-1000h.jpg"),
        require("../../assets/photographs/slit-scanning-2-1000h.jpg"),
    ];
    private associatedWork = Works.Photography;
}
</script>

<style lang="scss"></style>

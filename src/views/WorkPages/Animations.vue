<template>
    <work-page-base
        :title="title"
        :details="details"
        :images="images"
        :portaitAspectRatio="portaitAspectRatio"
        :associatedWork="associatedWork"
    ></work-page-base>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import WorkPageBase from "@/components/work/WorkPageBase.vue";
import { Works } from "@/model/WorkConfig";

@Options({
    components: {
        WorkPageBase,
    },
})
export default class Animation extends Vue {
    private title = "Animation";
    private details = ["2018", "Digital, photoshop"];
    // TODO: Upload actual videos.
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
    private portaitAspectRatio = false;
    private associatedWork = Works.Animations;
}
</script>

<style lang="scss"></style>

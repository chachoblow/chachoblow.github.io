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

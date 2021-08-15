<template>
    <work-page-images
        :images="images"
        :portait-aspect-ratio="false"
    ></work-page-images>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import WorkPageImages from "@/components/WorkPageImages.vue";

@Options({
    components: {
        WorkPageImages,
    },
})
export default class Illustrations extends Vue {
    private images = [
        require("../../assets/illustrations/bat-person-1080h.png"),
        require("../../assets/illustrations/breaking-bad-1500h.jpg"),
        require("../../assets/illustrations/can-you-hear-me-1800h.jpg"),
        require("../../assets/illustrations/fried-1381h.jpg"),
        require("../../assets/illustrations/man-rock-900h.png"),
        require("../../assets/illustrations/woman-cursive-900h.png"),
        require("../../assets/illustrations/yellow-vision-1800h.jpg"),
    ];
}
</script>

<style lang="scss"></style>

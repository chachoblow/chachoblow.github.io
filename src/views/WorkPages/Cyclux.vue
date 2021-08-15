<template>
    <work-page-images
        :images="images"
        :portait-aspect-ratio="true"
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
export default class Cyclux extends Vue {
    private images = [
        require("../../assets/comics/cyclux/spread-1-1000.jpg"),
        require("../../assets/comics/cyclux/spread-2-1000.jpg"),
        require("../../assets/comics/cyclux/spread-3-1000.jpg"),
        require("../../assets/comics/cyclux/spread-4-1000.jpg"),
        require("../../assets/comics/cyclux/spread-5-1000.jpg"),
        require("../../assets/comics/cyclux/spread-6-1000.jpg"),
    ];
}
</script>

<style lang="scss"></style>

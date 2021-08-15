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
export default class Branches extends Vue {
    private images = [
        require("../../assets/comics/branches/branches-page01.png"),
        require("../../assets/comics/branches/branches-page02.png"),
        require("../../assets/comics/branches/branches-page03.png"),
        require("../../assets/comics/branches/branches-page04.png"),
        require("../../assets/comics/branches/branches-page05.png"),
        require("../../assets/comics/branches/branches-page06.png"),
        require("../../assets/comics/branches/branches-page07.png"),
    ];
}
</script>

<style lang="scss"></style>

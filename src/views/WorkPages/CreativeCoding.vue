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
export default class CreativeCoding extends Vue {
    private title = "Creative coding";
    private details = ["2018-present", "Digital, software, processing"];
    private images = [
        require("../../assets/processing-sketches/examples/bobbing-ocean.gif"),
        require("../../assets/processing-sketches/examples/clicked-fireworks.gif"),
        require("../../assets/processing-sketches/examples/collage.gif"),
        require("../../assets/processing-sketches/examples/criss-cross.gif"),
        require("../../assets/processing-sketches/examples/exploding-balls.gif"),
        require("../../assets/processing-sketches/examples/game-of-life.gif"),
        require("../../assets/processing-sketches/examples/ghost-webcam.gif"),
        require("../../assets/processing-sketches/examples/make-shape.gif"),
        require("../../assets/processing-sketches/examples/pointillism.gif"),
        require("../../assets/processing-sketches/examples/random-chords.gif"),
        require("../../assets/processing-sketches/examples/row-column-suns.gif"),
        require("../../assets/processing-sketches/examples/row-suns.gif"),
        require("../../assets/processing-sketches/examples/suns-colliding.gif"),
    ];
    private portaitAspectRatio = false;
    private associatedWork = Works.CreativeCoding;
}
</script>

<style lang="scss"></style>

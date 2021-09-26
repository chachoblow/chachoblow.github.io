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
export default class CreativeCoding extends Vue {
    private title = "Creative coding";
    private details = ["2018-present", "Digital, software, processing"];
    // TODO: Upload actual sketches.
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

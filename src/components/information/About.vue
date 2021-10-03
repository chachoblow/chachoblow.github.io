<template>
    <div class="about-container">
        <p>
            <span>
                Hi, my name is Wesley Klein. I am currently based in Seattle, WA
                where I work as a software engineer.
            </span>
        </p>
        <p>
            <span>
                As for my background, I hold a mathematics and computer science
                degree from The University of California, Berkeley. More
                importantly, I consider myself an artist, maker, builder, and
                fixer. These are things I've done consistently throughout my
                life and are core to my identity.
            </span>
        </p>
        <p>
            <span>
                My interests include: virtual reality, creative coding,
                animation, drawing, electronics, 3D printing - basically
                anything that has a healthy mix of both the technical and
                creative. I'm always exploring the ways in which
                microcontrollers, web technologies, virtual reality, and
                creative coding frameworks can be merged with more traditional
                artistic endeavours, such as comics, animation, and drawing.
            </span>
        </p>
        <p>
            <span>
                Please feel free to contact me if you'd like to collaborate, or
                even just say hi.
            </span>
        </p>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class About extends Vue {}
</script>

<style scoped lang="scss">
p {
    display: block;
    margin: 0;

    + p {
        padding-top: 20px;
    }

    span {
        padding: 1px;
        background-color: white;
    }
}
</style>

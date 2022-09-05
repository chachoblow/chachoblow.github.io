<template>
    <WorkPageProject :id="id" v-slot="{ work }">
        <p>
            I wanted to make something that only used collections of lines for
            visuals. Everything within this application (even the text) is
            simply a specifically placed line collection.
        </p>
        <img
            :src="work.images[0].image"
            :alt="work.images[0].altText"
            rel="preload"
        />
        <p>
            In the main menu, you can choose to either arrange or watch 3
            different shapes: a circle, a square, and a triangle. While in the
            arrange portion, you can use the mouse wheel to make the shape's
            size different.
        </p>
        <img
            :src="work.images[1].image"
            :alt="work.images[1].altText"
            rel="preload"
        />
        <img
            :src="work.images[2].image"
            :alt="work.images[2].altText"
            rel="preload"
        />
        <img
            :src="work.images[3].image"
            :alt="work.images[3].altText"
            rel="preload"
        />
        <p>
            The application was made with JavaScript. More specifically, it used
            the p5.js library.
        </p>
    </WorkPageProject>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WorkPageProject from "@/components/WorkPageProject.vue";

export default defineComponent({
    components: {
        WorkPageProject,
    },
    data() {
        return {
            id: "lineCollection",
        };
    },
});
</script>

<style scoped lang="scss"></style>

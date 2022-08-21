<template>
    <div class="app-container">
        <div class="view-container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Karla&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Space+Mono&family=Work+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap");

@font-face {
    font-family: Mondwest;
    src: url("assets/fonts/PPMondwest-Regular.otf") format("opentype");
}

@font-face {
    font-family: NeueBit;
    src: url("assets/fonts/PPNeueBit-Bold.otf") format("opentype");
}

@font-face {
    font-family: NeueMontreal;
    src: url("assets/fonts/PPNeueMontreal-Medium.otf") format("opentype");
}

html,
body {
    margin: 0;
    padding: 0;
    box-sizing: content-box;
}

#app {
    font-family: "Karla", sans-serif;
    font-family: "Space Mono", monospace;
    font-family: "Work Sans", sans-serif;
    font-family: "Mondwest", sans-serif;
    //font-family: "NeueBit", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 0.9rem;
}
</style>

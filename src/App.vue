<template>
    <div class="app-container">
        <HeaderMain></HeaderMain>
        <main role="main">
            <RouterView></RouterView>
        </main>
    </div>
</template>

<script setup lang="ts">
import HeaderMain from "@/components/HeaderMain.vue";
</script>

<style lang="scss">
@import "@/scss/globals.scss";

@import url("https://fonts.googleapis.com/css2?family=Karla&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Space+Mono&family=Work+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Silkscreen&display=swap");

@font-face {
    font-family: Mori;
    src: url("/assets/fonts/PPMori-Regular.otf") format("opentype");
}

@font-face {
    font-family: NeueMachina;
    src: url("/assets/fonts/PPNeueMachina-PlainLight.otf") format("opentype");
}

html,
body {
    margin: 0;
    padding: 0;
    box-sizing: content-box;
    height: 100%;
}

#app {
    font-family: "NeueMachina", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 0.8rem;
}
</style>

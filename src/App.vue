<template>
    <div class="app-container">
        <HeaderMain></HeaderMain>
        <main role="main">
            <router-view></router-view>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderMain from "@/components/HeaderMain.vue";

export default defineComponent({
    components: {
        HeaderMain,
    },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Karla&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Space+Mono&family=Work+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Silkscreen&display=swap");

@font-face {
    font-family: Mori;
    src: url("assets/fonts/PPMori-Regular.otf") format("opentype");
}

html,
body {
    margin: 0;
    padding: 0;
    box-sizing: content-box;
    height: 100%;
}

#app {
    font-family: "Mori", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 0.9rem;
}
</style>

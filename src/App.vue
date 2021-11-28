<template>
    <div class="app-container">
        <div class="view-container">
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class App extends Vue {}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Karla&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Space+Mono&family=Work+Sans&display=swap");

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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 0.9rem;

    padding: 10px;
}
</style>

<template>
    <div class="app-container">
        <app-header></app-header>
        <div class="view-container">
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import AppHeader from "@/components/AppHeader.vue";

@Options({
    components: {
        AppHeader,
    },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

html,
body {
    margin: 0;
    padding: 0;
    box-sizing: content-box;
}

#app {
    font-family: "Space Mono", monospace;
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

.app-container {
    display: flex;
    flex-direction: column;
}

.view-container {
    padding-bottom: 20px;
}
</style>

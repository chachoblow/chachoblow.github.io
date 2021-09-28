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
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Space+Mono&display=swap");

html,
body {
    margin: 0;
    padding: 0;
    box-sizing: content-box;
}

h1,
h2 {
    font-family: "Libre Baskerville", serif;
    font-weight: normal;
    font-size: 1.5rem;
}

#app {
    font-family: "Space Mono", monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.app-container {
    display: flex;
    flex-direction: column;
}

.view-container {
    padding-bottom: 40px;
}
</style>

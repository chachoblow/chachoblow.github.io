<template>
    <div class="app-container">
        <main role="main">
            <RouterView></RouterView>
        </main>
    </div>
</template>

<script setup lang="ts">
</script>

<style>
@import "@/css/globals.css";

@font-face {
    font-family: NeueMontreal;
    src: url("/assets/fonts/PPNeueMontreal-Book.otf") format("opentype");
}

html,
body {
    margin: 0;
    padding: 0;
    box-sizing: content-box;
    height: 100%;
}

#app {
    font-family: 'NeueMontreal', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 0.8rem;
}
</style>

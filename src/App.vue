<template>
    <div class="app-container">
        <div id="nav">
            <div class="nav-title show-large-width-window">Wesley Klein</div>
            <div class="nav-title show-small-width-window">WK</div>
            <div class="router-links">
                <router-link to="/">Work</router-link>
                <router-link to="/about">About</router-link>
            </div>
        </div>
        <router-view />
    </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap");

html,
body {
    margin: 0;
    padding: 0;
    box-sizing: content-box;
}

#app {
    font-family: "Space Mono", monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

#nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    font-size: 1.25rem;
    border-bottom: 1px solid black;

    @media (min-width: $small-device-width) {
        padding: 30px 60px;
        font-size: 1.5rem;
    }

    a {
        color: black;
        text-decoration: none;

        &.router-link-exact-active {
            font-style: italic;
        }

        &:hover {
            cursor: pointer;
        }

        &:not(:last-child) {
            padding-right: 20px;
        }
    }
}

.app-container {
    display: flex;
    flex-direction: column;
}

.show-large-width-window {
    display: none;

    @media (min-width: $small-device-width) {
        display: block;
    }
}

.show-small-width-window {
    display: block;

    @media (min-width: $small-device-width) {
        display: none;
    }
}
</style>

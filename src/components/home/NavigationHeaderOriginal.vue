<template>
    <div class="navigation-header-container">
        <span>
            <router-link to="/">
                <span>
                    <img src="@/assets/my-eyes-name-clear.png" />
                </span>
            </router-link>
        </span>
        <span class="navigation-links">
            <router-link to="/">Work</router-link>
            <router-link to="/information">Information</router-link>
        </span>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class NavigationHeader extends Vue {}
</script>

<style scoped lang="scss">
.navigation-header-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: $desktop-max-width;
    margin: auto;
    padding: $view-container-padding-small;
    font-size: 1rem;

    @media (min-width: $small-device-width) {
        padding: $view-container-padding-large;
    }
}

.navigation-links {
    display: flex;

    a:first-of-type {
        margin-right: 30px;
    }
}

img {
    height: 75px;
}

.navigation-links .router-link-active {
    border-bottom: 1px solid;
}
</style>

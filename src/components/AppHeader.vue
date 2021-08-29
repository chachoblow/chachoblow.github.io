<template>
    <div class="app-header-container">
        <div id="nav">
            <div class="nav-title show-large-width-window">Wesley Klein</div>
            <div class="nav-title show-small-width-window">WK</div>
            <div class="router-links">
                <router-link to="/">Work</router-link>
                <router-link to="/about">About</router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { workModule } from "@/store/WorkModule";

export default class AppHeader extends Vue {
    private get availableTags(): string[] {
        return workModule.availableTags;
    }

    private get selectedTags(): string[] {
        return workModule.selectedTags;
    }

    private set selectedTags(selectedTags: string[]) {
        workModule.setSelectedTags(selectedTags);
    }

    private get selectedThumbnailsCount(): number {
        return workModule.selectedThumbnailConfigs.length;
    }
}
</script>

<style scoped lang="scss">
$padding-lr-large: 60px;
$padding-lr-small: 30px;
$padding-tb-large: 30px;
$padding-tb-small: 15px;

.app-header-container {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
}
#nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: $padding-tb-small $padding-lr-small;
    font-size: 1.25rem;
    border-bottom: 1px solid black;

    @media (min-width: $small-device-width) {
        padding: $padding-tb-large $padding-lr-large;
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

label,
input {
    cursor: pointer;
}

label {
    border: none;
    margin: 0;
    text-decoration: none;
    background: #fff;
    padding-right: 10px;

    &:checked {
        font-style: italic;
    }
}

.tag-selection-container {
    display: flex;
    justify-content: space-between;
    padding: $padding-tb-small $padding-lr-small;

    @media (min-width: $small-device-width) {
        padding: $padding-tb-large $padding-lr-large;
    }
}

.tag-selection-inputs {
    display: flex;
}
</style>

<template>
    <div class="home-container">
        <navigation-header></navigation-header>
        <div class="work-container">
            <works-thumbnails></works-thumbnails>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import WorksThumbnails from "@/components/home/WorksThumbnails.vue";
import NavigationHeader from "@/components/home/NavigationHeader.vue";

@Options({
    components: {
        WorksThumbnails,
        NavigationHeader,
    },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.home-container {
    display: flex;
    flex-direction: column;
    
    @media (min-width: $small-device-width) {
        min-height: 100vh;
    }
}

.work-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: $view-container-padding-small;

    @media (min-width: $small-device-width) {
        padding: $view-container-padding-large;
        padding-top: $navigation-header-gap;
        padding-bottom: $navigation-header-gap;
        flex: 1;
        justify-content: center;
    }
}
</style>

<template>
    <div class="home-container">
        <navigation-header></navigation-header>
        <div class="work-container">
            <works></works>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Works from "@/components/home/Works.vue";
import NavigationHeader from "@/components/home/NavigationHeader.vue";

@Options({
    components: {
        Works,
        NavigationHeader,
    },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.home-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

.work-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: $view-container-padding-small;
    max-width: $desktop-max-width;

    @media (min-width: $small-device-width) {
        padding: $view-container-padding-large;
        padding-top: $navigation-header-gap;
        padding-bottom: $navigation-header-gap;
    }
}
</style>

<template>
    <div class="home-container">
        <header-main></header-main>
        <div class="home-main-content">
            <work-router-links></work-router-links>
            <work-mosaic></work-mosaic>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import WorkRouterLinks from "@/components/WorkRouterLinks.vue";
import WorkMosaic from "@/components/WorkMosaic.vue";
import HeaderMain from "@/components/HeaderMain.vue";

@Options({
    components: {
        WorkRouterLinks,
        HeaderMain,
        WorkMosaic,
    },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.home-container {
    display: flex;
    flex-direction: column;
}

.home-main-content {
    display: flex;
    flex-direction: row;
    width: 100%;

    .work-router-links {
        width: 33%;
    }

    .work-mosaic {
        width: 66%;
    }
}
</style>

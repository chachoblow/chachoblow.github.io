<template>
    <div class="home-container">
        <HeaderMain></HeaderMain>
        <div class="home-main-content">
            <WorkRouterLinks></WorkRouterLinks>
            <WorkMosaic></WorkMosaic>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WorkRouterLinks from "@/components/WorkRouterLinks.vue";
import WorkMosaic from "@/components/WorkMosaic.vue";
import HeaderMain from "@/components/HeaderMain.vue";

export default defineComponent({
    components: {
        WorkRouterLinks,
        HeaderMain,
        WorkMosaic,
    },
});
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

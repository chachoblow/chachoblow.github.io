<template>
    <div class="home-container">
        <HeaderMain></HeaderMain>
        <div class="home-main-content">
            <WorkRouterLinks></WorkRouterLinks>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WorkRouterLinks from "@/components/WorkRouterLinks.vue";
import HeaderMain from "@/components/HeaderMain.vue";

export default defineComponent({
    components: {
        WorkRouterLinks,
        HeaderMain,
    },
});
</script>

<style scoped lang="scss">
.home-container {
    font-size: 0.9rem;
}
</style>

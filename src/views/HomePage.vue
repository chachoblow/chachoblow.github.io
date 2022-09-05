<template>
    <div class="home-container">
        <div class="home-main-content">
            <WorkRouterLinks></WorkRouterLinks>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WorkRouterLinks from "@/components/WorkRouterLinks.vue";

export default defineComponent({
    components: {
        WorkRouterLinks,
    },
});
</script>

<style scoped lang="scss">
.home-container {
    font-size: 0.9rem;
}
</style>

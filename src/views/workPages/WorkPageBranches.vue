<template>
    <WorkPageGallery :id="id"></WorkPageGallery>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WorkPageGallery from "@/components/WorkPageGallery.vue";

export default defineComponent({
    components: {
        WorkPageGallery,
    },
    data() {
        return {
            id: "branches",
        };
    },
});
</script>

<style lang="scss"></style>

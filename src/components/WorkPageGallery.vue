<template>
    <div class="grid-layout page-padding">
        <slot>
            <!-- eslint-disable vue/no-v-html -->
            <div
                v-for="html in work.customWorkHtml"
                :key="html"
                class="image-container"
                v-html="html"
            ></div>
            <!--eslint-enable-->
            <div
                v-for="video in work.videos"
                :key="video"
                class="image-container"
            >
                <video autoplay loop muted playsinline>
                    <source :src="video" type="video/mp4" />
                </video>
            </div>
            <div
                v-for="image in work.images"
                :key="image.image"
                class="image-container"
            >
                <img :src="image.image" :alt="image.altText" rel="preload" />
            </div>
        </slot>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useWorkStore } from "@/stores/work";

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
});

const workStore = useWorkStore();

const work = computed(() => {
    return workStore.work(props.id);
});
</script>

<style scoped>
.grid-layout {
    row-gap: var(--page-padding-small);
    max-width: 900px;
    margin: auto;

    @media (min-width: 900px) {
        grid-template-columns: 1fr;
    }
}

.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-container video,
.image-container img {
    width: 100%;
    height: 100%;
    max-width: 900px;
    max-height: 80vh;
}

.image-container img {
    object-fit: contain;
    object-position: center;
}
</style>

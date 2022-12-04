<template>
    <ul class="work-router-links">
        <li v-for="work in works" :key="work.title">
            <RouterLink :to="work.routerLink" v-slot="{ href, navigate }" custom>
                <a :href="href" class="work-title" @click="navigate">
                    <img :src="work.imageMenuCropped.image" :alt="work.imageMenuCropped.altText" rel="preload" />
                    <span>{{ work.title }}</span>
                </a>
            </RouterLink>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { useWorkStore } from "@/stores/work";
import { computed } from "vue";

const workStore = useWorkStore();

const works = computed(() => {
    return workStore.workConfigs;
});
</script>

<style scoped lang="scss">
@import "@/scss/mixins.scss";

.work-router-links {
    @include page-padding;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: $page-padding-small;
    padding-top: $page-padding-medium !important;

    @media (min-width: $small-device-width) {
        grid-template-columns: 1fr 1fr;
        gap: $page-padding-medium;
        padding-top: 0 !important;
    }

    @media (min-width: $medium-device-width) {
        grid-template-columns: 1fr 1fr 1fr;
        gap: $page-padding-large;
    }
}

a {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-decoration: none;

    &:hover {
        opacity: 1;
    }

    span {
        padding-top: 10px;
    }

    img {
        height: 300px;
        width: 100%;
        object-fit: cover;
    }
}
</style>

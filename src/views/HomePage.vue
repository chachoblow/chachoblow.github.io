<template>
    <ul class="works">
        <li v-for="work in works" :key="work.title" class="work">
            <RouterLink :to="work.routerLink" v-slot="{ href, navigate }" custom>
                <div class="work__heading">
                    <a :href="href" class="work__link" @click="navigate">
                        <div class="work__heading-title">{{ work.title }}</div>
                    </a>
                    <a :href="href" class="work__link" @click="navigate">
                        <div class="work__heading-symbol">+</div>
                    </a>
                </div>
                <swiper-container class="work__images" :slides-per-view="'auto'" :free-mode="true" :space-between="10"
                    :grab-cursor="true">
                    <swiper-slide v-for="(image, index) in work.imagesMenu" class="work__image">
                        <a :href="href" class="work__link work__link--no-hover" @click="navigate">
                            <img :src="image.image" :alt="image.altText" rel="preload" />
                        </a>
                        <a :href="href" class="work__link work__image-count" @click="navigate">
                            <div>I.{{ String(index + 1).padStart(2, "0") }}</div>
                        </a>
                    </swiper-slide>
                </swiper-container>
            </RouterLink>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { useWorkStore } from "@/stores/work";
import { computed } from "vue";
import { register } from 'swiper/element/bundle';

register();

const workStore = useWorkStore();

const works = computed(() => {
    return workStore.workConfigs;
});
</script>

<style scoped lang="scss">
@import "@/scss/mixins.scss";

@font-face {
    font-family: Mondwest;
    src: url("/assets/fonts/PPMondwest-Regular.otf") format("opentype");
}

@font-face {
    font-family: NeueMachinaLightItalic;
    src: url("/assets/fonts/PPNeueMachina-PlainLightItalic.otf") format("opentype");
}

.works {
    @include page-padding;
    display: flex;
    flex-direction: column;
}

.work {
    +.work {
        margin-top: 50px;
    }
}

.work__heading {
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-family: "Mondwest", sans-serif;
    font-size: 2rem;
    line-height: 1;
    margin-bottom: 10px;
}

swiper-container {
    overflow: visible;
}

swiper-slide {
    width: 160px;
}

swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.work__image {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.work__image-count {
    font-size: 0.6rem;
    line-height: 1;
    margin-top: 10px;
}

.work__link {
    text-decoration: none;
}

.work__link--no-hover {
    &:hover {
        opacity: 1;
    }
}
</style>

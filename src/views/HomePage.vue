<template>
    <ul class="works">
        <li v-for="work in works" :key="work.title" class="work">
            <RouterLink :to="work.routerLink" v-slot="{ href, navigate }" custom>
                <a :href="href" class="work__image work__link work__link--no-hover" @click="navigate">
                    <img :src="work.imagesMenu[0].image" :alt="work.imagesMenu[0].altText" rel="preload" />
                </a>
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
    justify-content: center;
    align-items: center;
}

.work {
    +.work {
        margin-top: 100px;
    }
}

.work__image {
    display: flex;
    flex-direction: column;
    width: fit-content;

    img {
        width: 100%;
        height: 100%;
        max-width: 400px;
        //max-height: 60vh;
    }

    img {
        object-fit: contain;
        object-position: center;
    }
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

<template>
    <header class="grid-layout page-padding">
        <RouterLink to="/" v-slot="{ href, navigate }" custom>
            <div class="name-container">
                <div class="name-container--static">
                    <a :href="href" @click="navigate">{{ defaultTitle }}</a>
                </div>
                <div class="name-container--dynamic" :style="titleFont">
                    <a :href="href" @click="navigate">{{ title }}</a>
                </div>
            </div>
        </RouterLink>
        <AboutMe></AboutMe>
    </header>
    <div class="grid-layout page-padding">
        <div></div>
        <ul class="works">
            <li v-for="(work, index) in works" :key="work.title" class="work">
                <RouterLink :to="work.routerLink" v-slot="{ href, navigate }" custom>
                    <a :href="href" class="work__image work__link work__link--no-hover" @click="navigate"
                        @mouseover="changeTitle(work.title)" @mouseleave="changeTitle('')">
                        <img :src="work.imagesMenu[0].image" :alt="work.imagesMenu[0].altText" rel="preload" />
                    </a>
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { useWorkStore } from "@/stores/work";
import { ref, computed, watch } from "vue";
import AboutMe from "@/components/AboutMe.vue";
import { gsap } from "gsap";

const workStore = useWorkStore();

const works = computed(() => {
    return workStore.workConfigs;
});

const hoveredWork = ref("");

const defaultTitle = "Wesley Klein"

const title = computed(() => {
    return hoveredWork.value ? hoveredWork.value : defaultTitle;
});

const titleFont = computed(() => {
    const font = title.value === defaultTitle ? "Migra" : "MigraItalic";
    const value = `'${font}', sans-serif`;
    return {
        "--title-font": value
    }
});

function changeTitle(value: string): void {
    const duration = 0.15;

    function fade() {
        gsap.fromTo(".name-container a", {
            opacity: 1,
        }, {
            duration,
            opacity: 0,
            ease: "power1",
            onComplete: handleOnComplete
        });
        gsap.fromTo(".name-container a", {
            opacity: 0,
        }, {
            delay: duration,
            duration,
            opacity: 1,
            ease: "power1"
        });
    }

    function handleOnComplete() {
        hoveredWork.value = value;
    }

    const mm = gsap.matchMedia();
    // Below should match "$small-device-width".
    mm.add("(min-width: 900px)", () => {
        fade();
    });
}
</script>

<style scoped lang="scss">
@import "@/scss/mixins.scss";

@font-face {
    font-family: Migra;
    src: url("/assets/fonts/Migra-Extralight.otf") format("opentype");
}

@font-face {
    font-family: MigraItalic;
    src: url("/assets/fonts/MigraItalic-ExtralightItalic.otf") format("opentype");
}

.grid-layout {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    column-gap: calc($page-padding-medium / 2);
    z-index: 2;
    background: transparent;

    @media (min-width: $small-device-width) {
        grid-template-columns: 1fr 2fr;
    }

    @media (min-width: $medium-device-width) {
        column-gap: calc($page-padding-large / 2);
    }
}

.page-padding {
    @include page-padding;
}

header {
    position: initial;
    background-color: white;

    @media (min-width: $small-device-width) {
        position: sticky;
        top: 0;
        backdrop-filter: blur(50px);
    }
}

.name-container {
    font-size: 2rem;
    padding-bottom: 16px;

    a {
        text-decoration: none;
    }

    a:hover {
        opacity: 1;
    }

    @media (min-width: $small-device-width) {
        font-size: 3rem;
        padding-bottom: 0;
    }

    @media (min-width: $medium-device-width) {
        font-size: 3rem;
    }
}

.name-container--static {
    font-family: Migra;
    display: block;

    @media (min-width: $small-device-width) {
        display: none;
    }
}

.name-container--dynamic {
    font-family: var(--title-font);
    display: none;

    @media (min-width: $small-device-width) {
        display: block;
    }
}

.works {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 64px;

    @media (min-width: $small-device-width) {
        margin-top: 56px;
    }
}

.work+.work {
    margin-top: 8px;

    @media (min-width: $small-device-width) {
        margin-top: 64px;
    }
}

.work__image {
    display: flex;
    flex-direction: column;
    width: fit-content;

    img {
        width: 100%;
        height: 100%;
        max-width: 600px;
        object-fit: contain;
        object-position: left;

        @media (min-width: $small-device-width) {
            max-height: 60vh;
        }
    }
}

.work__link {
    text-decoration: none;
}

.work__link--no-hover:hover {
    opacity: 1;
}
</style>

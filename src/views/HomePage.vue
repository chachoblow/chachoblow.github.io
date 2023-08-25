<template>
    <div class="homepage">
        <header class="homepage__left">
            <RouterLink to="/" v-slot="{ href, navigate }" custom>
                <div class="name-container" :style="titleFont">
                    <a :href="href" @click="navigate">{{ title }}</a>
                </div>
            </RouterLink>
        </header>
        <div class="homepage__right">
            <AboutMe></AboutMe>
            <ul class="works">
                <li v-for="(work, index) in works" :key="work.title" class="work">
                    <RouterLink :to="work.routerLink" v-slot="{ href, navigate }" custom>
                        <a :href="href" class="work__image work__link work__link--no-hover" @click="navigate"
                            @mouseover="handleMouseover(work.title)" @mouseleave="handleMouseleave">
                            <img :src="work.imagesMenu[0].image" :alt="work.imagesMenu[0].altText" rel="preload" />
                        </a>
                    </RouterLink>
                </li>
            </ul>
        </div>
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

watch(title, (newTitle: string) => {
    changeTitle(newTitle);
});

function handleMouseover(title: string) {
    // Below should match "$desktop-max-width".
    if (window.innerWidth > 1000) {
        hoveredWork.value = title;
    }
}

function handleMouseleave() {
    // Below should match "$desktop-max-width".
    if (window.innerWidth > 1000) {
        hoveredWork.value = "";
    }
}

function changeTitle(value: string): void {
    const mm = gsap.matchMedia();
    // Below should match "$desktop-max-width".
    mm.add("(min-width: 1000px)", () => {
        gsap.fromTo(".name-container a", {
            opacity: 0
        }, {
            duration: 1,
            innerHTML: () => value,
            opacity: 1,
            ease: "power1"
        });
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

.homepage {
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

.homepage__left,
.homepage__right {
    @include page-padding;
}

.homepage__left {
    @media (min-width: $small-device-width) {
        padding-right: calc($page-padding-medium / 2);
        position: sticky;
        top: 0;
        height: 100vh;
        box-sizing: border-box;
    }

    @media (min-width: $medium-device-width) {
        padding-right: calc($page-padding-large / 2);
    }
}

.homepage__right {
    @media (min-width: $small-device-width) {
        padding-left: calc($page-padding-medium / 2);
    }

    @media (min-width: $medium-device-width) {
        padding-left: calc($page-padding-large / 2);
    }
}

.name-container {
    font-family: var(--title-font);
    font-size: 2rem;

    a {
        text-decoration: none;
    }

    a:hover {
        opacity: 1;
    }

    @media (min-width: $small-device-width) {
        font-size: 3rem;
    }

    @media (min-width: $medium-device-width) {
        font-size: 4rem;
    }
}

.works {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 100px;
}

.work {
    +.work {
        margin-top: 60px;

        @media (min-width: $small-device-width) {
            margin-top: 150px;
        }

        @media (min-width: $medium-device-width) {
            margin-top: 150px;
        }
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

.work__link--no-hover {
    &:hover {
        opacity: 1;
    }
}
</style>

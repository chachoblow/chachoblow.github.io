<template>
    <header class="grid-layout page-padding">
        <RouterLink v-slot="{ href, navigate }" to="/" custom>
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
            <li v-for="work in works" :key="work.title" class="work">
                <RouterLink
                    v-slot="{ href, navigate }"
                    :to="work.routerLink"
                    custom
                >
                    <a
                        :href="href"
                        class="work__image work__link work__link--no-hover"
                        @click="navigate"
                        @mouseover="changeTitle(work.title)"
                        @mouseleave="changeTitle('')"
                    >
                        <img
                            :src="work.imagesMenu[0].image"
                            :alt="work.imagesMenu[0].altText"
                            rel="preload"
                        />
                    </a>
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { useWorkStore } from "@/stores/work";
import { ref, computed } from "vue";
import AboutMe from "@/components/AboutMe.vue";
import { gsap } from "gsap";

const workStore = useWorkStore();

const works = computed(() => {
    return workStore.workConfigs;
});

const hoveredWork = ref("");

const defaultTitle = "Wesley Klein";

const title = computed(() => {
    return hoveredWork.value ? hoveredWork.value : defaultTitle;
});

const titleFont = computed(() => {
    const font = title.value === defaultTitle ? "Migra" : "MigraItalic";
    const value = `'${font}', sans-serif`;
    return {
        "--title-font": value,
    };
});

function changeTitle(value: string): void {
    const duration = 0.15;

    function fade() {
        gsap.fromTo(
            ".name-container a",
            {
                opacity: 1,
            },
            {
                duration,
                opacity: 0,
                ease: "power1",
                onComplete: handleOnComplete,
            }
        );
        gsap.fromTo(
            ".name-container a",
            {
                opacity: 0,
            },
            {
                delay: duration,
                duration,
                opacity: 1,
                ease: "power1",
            }
        );
    }

    function handleOnComplete() {
        hoveredWork.value = value;
    }

    const mm = gsap.matchMedia();
    mm.add("(min-width: 900px)", () => {
        fade();
    });
}
</script>

<style scoped>
@font-face {
    font-family: Migra;
    src: url("/assets/fonts/Migra-Extralight.otf") format("opentype");
}

@font-face {
    font-family: MigraItalic;
    src: url("/assets/fonts/MigraItalic-ExtralightItalic.otf")
        format("opentype");
}

header {
    position: initial;

    @media (min-width: 900px) {
        position: sticky;
        top: 0;
        backdrop-filter: blur(50px);
    }
}

.name-container {
    font-size: 2rem;
    padding-bottom: calc(var(--page-padding) * 2);

    @media (min-width: 900px) {
        font-size: 3rem;
        padding-bottom: 0;
    }
}

.name-container a {
    text-decoration: none;
    /* Add some padding for italic font style change. */
    padding-right: 10px;
}

.name-container a:hover {
    opacity: 1;
}

.name-container--static {
    font-family: Migra;
    display: block;

    @media (min-width: 900px) {
        display: none;
    }
}

.name-container--dynamic {
    font-family: var(--title-font);
    display: none;

    @media (min-width: 900px) {
        display: block;
    }
}

.works {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* (8 - 1) to account for page padding on container */
    margin-top: calc(var(--page-padding) * 7);
}

.work + .work {
    margin-top: var(--page-padding);

    @media (min-width: 900px) {
        margin-top: calc(var(--page-padding) * 8);
    }
}

.work__image {
    display: flex;
    flex-direction: column;
    width: fit-content;
}

.work__image img {
    width: 100%;
    height: 100%;
    max-width: 600px;
    object-fit: contain;
    object-position: left;

    @media (min-width: 900px) {
        max-height: 60vh;
    }
}

.work__link {
    text-decoration: none;
}

.work__link--no-hover:hover {
    opacity: 1;
}
</style>

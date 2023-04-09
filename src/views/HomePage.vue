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
                <div class="work__images">
                    <div v-for="(image, index) in work.imagesMenu" class="work__image">
                        <a :href="href" class="work__link work__link--no-hover" @click="navigate">
                            <img :src="image.image" :alt="image.altText" rel="preload" />
                        </a>
                        <a :href="href" class="work__link" @click="navigate">
                            <div>I.{{ String(index + 1).padStart(2, "0") }}</div>
                        </a>
                    </div>
                </div>
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

.works {
    @include page-padding;
    display: flex;
    flex-direction: column;
}

.work {
    +.work {
        margin-top: 100px;
    }
}

.work__heading {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.work__images {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin-left: -$page-padding-small;
    margin-right: -$page-padding-small;

    @media (min-width: $small-device-width) {
        margin-left: -$page-padding-medium;
        margin-right: -$page-padding-medium;
    }

    @media (min-width: $medium-device-width) {
        margin-left: -$page-padding-large;
        margin-right: -$page-padding-large;
    }

    &::-webkit-scrollbar {
        display: none;
    }
}

.work__image {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    &:first-of-type {
        padding-left: $page-padding-small;

        @media (min-width: $small-device-width) {
            padding-left: $page-padding-medium;
        }

        @media (min-width: $medium-device-width) {
            padding-left: $page-padding-large;
        }
    }

    &:last-of-type {
        padding-right: $page-padding-small;

        @media (min-width: $small-device-width) {
            padding-right: $page-padding-medium;
        }

        @media (min-width: $medium-device-width) {
            padding-right: $page-padding-large;
        }
    }

    +.work__image {
        margin-left: 10px;
    }
}

img {
    height: 200px;
    margin: 4px 0;
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

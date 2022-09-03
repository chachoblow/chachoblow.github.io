<template>
    <div class="work-router-links">
        <div
            v-for="work in works"
            :key="work.title"
            class="work-router-link"
            @mouseenter="handleMouseEnter(work.id)"
            @mouseleave="handleMouseLeave(work.id)"
        >
            <RouterLink
                :to="work.routerLink"
                v-slot="{ href, navigate }"
                custom
            >
                <div :id="`${work.id}WorkTitleText`" class="work-title">
                    <a :href="href" @click="navigate">
                        <img :src="work.imageMenuCropped" rel="preload" />
                        <span>{{ work.title }}</span>
                    </a>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { WorkConfig } from "@/model/WorkConfig";
import { mapStores } from "pinia";
import { useWorkStore } from "@/stores/work";
import gsap from "gsap";

export default defineComponent({
    computed: {
        works(): WorkConfig[] {
            return this.workStore.workConfigs;
        },
        ...mapStores(useWorkStore),
    },
    methods: {
        handleMouseEnter(workId: string): void {
            this.workStore.setWorkId(workId);
        },
        handleMouseLeave(workId: string): void {
            this.workStore.setWorkId("");
        },
    },
});
</script>

<style scoped lang="scss">
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

    a {
        text-decoration: none;

        &:hover {
            opacity: 1;
        }
    }
}

.work-title {
    width: 100%;

    a {
        display: flex;
        flex-direction: column;
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

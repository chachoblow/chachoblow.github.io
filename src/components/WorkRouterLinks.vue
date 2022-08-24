<template>
    <div class="work-router-links">
        <div
            v-for="(work, index) in works"
            :key="work.title"
            class="work-router-link"
        >
            <RouterLink
                :to="work.routerLink"
                v-slot="{ href, navigate }"
                custom
            >
                <div class="work-title">
                    <a
                        :href="href"
                        @click="navigate"
                        @mouseenter="handleMouseEnter(work.id)"
                        @mouseleave="handleMouseLeave(work.id)"
                    >
                        <span class="work-title-index">0{{ index + 1 }}</span>
                        <span class="work-title-text">{{ work.title }}</span>
                    </a>
                </div>
                <div class="work-images">
                    <a
                        v-for="image in work.thumbnails"
                        :key="image"
                        :href="href"
                        @mouseenter="handleMouseEnter(work.id)"
                        @mouseleave="handleMouseLeave(work.id)"
                    >
                        <img :src="image" rel="preload" />
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
        handleMouseLeave(): void {
            this.workStore.setWorkId("");
        },
    },
});
</script>

<style scoped lang="scss">
.work-router-links {
    display: flex;
    flex-direction: column;
}

.work-router-link {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    + .work-router-link {
        padding-top: 50px;
    }

    @media (min-width: $small-device-width) {
        flex-direction: row;
    }
}

.work-title {
    width: 100%;
    padding-bottom: 10px;
    padding-left: $page-padding;

    @media (min-width: $small-device-width) {
        width: 25%;
        padding-bottom: 0;
    }

    .work-title-index {
        color: lightgray;
        padding-right: 32px;
    }
}

.work-images {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-left: $page-padding;

    @media (min-width: $small-device-width) {
        flex-wrap: wrap;
        width: 75%;
        padding-left: 0;
    }

    img {
        height: 75px;
        padding: 0 4px 4px 0;

        @media (min-width: $small-device-width) {
            height: 100px;
        }
    }
}

a {
    width: fit-content;
}
</style>

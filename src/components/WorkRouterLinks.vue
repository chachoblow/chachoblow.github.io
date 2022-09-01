<template>
    <div class="work-router-links">
        <div v-for="work in works" :key="work.title" class="work-router-link">
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
                        <span>{{ work.title }}</span>
                        <img
                            src="@/assets/icons/right-arrow-thin.svg"
                            rel="preload"
                        />
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
    margin: 0 $page-padding;

    a {
        text-decoration: none;

        &:hover {
            opacity: 1;
        }
    }
}

.work-router-link {
    border-bottom: 1px solid;

    &:first-of-type {
        border-top: 1px solid;
    }
}

.work-title {
    width: 100%;
    font-size: 3rem;

    a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
    }

    img {
        height: 40px;
    }
}
</style>

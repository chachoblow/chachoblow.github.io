<template>
    <div class="work-router-links">
        <div v-for="work in works" :key="work.title" class="work-router-link">
            <RouterLink
                :to="work.routerLink"
                v-slot="{ href, navigate }"
                custom
            >
                <a
                    :id="`${work.id}RouterLink`"
                    :href="href"
                    class="router-work-link"
                    @click="navigate"
                    @mouseenter="handleMouseEnter(work.id)"
                    @mouseleave="handleMouseLeave(work.id)"
                >
                    {{ work.title }}
                </a>
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
    props: {
        mosaicHover: {
            type: String,
            required: true,
        },
    },
    emits: {
        routerLinkHover(payload: { workId: string }) {
            return payload.workId.length >= 0;
        },
    },
    computed: {
        works(): WorkConfig[] {
            return this.workStore.workConfigs;
        },
        ...mapStores(useWorkStore),
    },
    watch: {
        mosaicHover(newValue: string) {
            if (newValue) {
                gsap.to(`.router-work-link:not(#${newValue}RouterLink)`, {
                    opacity: 0.1,
                    duration: 0.5,
                });
            } else {
                gsap.to(".router-work-link", {
                    opacity: 1,
                    duration: 0.5,
                });
            }
        },
    },
    methods: {
        handleMouseEnter(workId: string): void {
            this.workStore.setWorkId(workId);
            this.$emit("routerLinkHover", { workId: workId });
        },
        handleMouseLeave(): void {
            this.workStore.setWorkId("");
            this.$emit("routerLinkHover", { workId: "" });
        },
    },
});
</script>

<style scoped lang="scss">
.work-router-links {
    position: fixed;
    padding-left: $page-padding;
    font-size: 4rem;
}

.work-router-link {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    + .work-router-link {
        padding-top: 10px;
    }
}

a {
    width: fit-content;
}
</style>

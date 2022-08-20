<template>
    <div class="work-router-links">
        <div v-for="work in works" :key="work.title" class="work-router-link">
            <RouterLink
                :to="work.routerLink"
                v-slot="{ href, navigate }"
                custom
            >
                <a :href="href" class="router-work-link" @click="navigate">{{
                    work.title
                }}</a>
            </RouterLink>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { WorkConfig } from "@/model/WorkConfig";
import { workModule } from "@/store/WorkModule";

export default defineComponent({
    computed: {
        works(): WorkConfig[] {
            return workModule.workConfigs;
        },
        hoveredWork(): string {
            return workModule.workId;
        },
    },
    methods: {
        linkClasses(workId: string): string[] {
            const classes: string[] = [];
            if (workModule.workId !== "" && workModule.workId !== workId) {
                classes.push("thumbnail-not-hovering");
            }
            return classes;
        },
        // handleMouseEnter(elementId: string): void {
        //     gsap.to("#" + elementId, { opacity: 0.25, duration: 1 });
        // },
        // handleMouseLeave(elementId: string): void {
        //     gsap.to("#" + elementId, { opacity: 1, duration: 1 });
        // },
    },
});
</script>

<style scoped lang="scss">
.work-router-links {
    position: fixed;
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

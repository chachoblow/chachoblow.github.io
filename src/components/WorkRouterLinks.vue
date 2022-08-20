<template>
    <div class="work-router-links">
        <div v-for="work in works" :key="work.title" class="work-router-link">
            <router-link
                :to="work.routerLink"
                v-slot="{ href, navigate }"
                custom
            >
                <a :href="href" class="router-work-link" @click="navigate">{{
                    work.title
                }}</a>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { WorkConfig } from "@/model/WorkConfig";
import { workModule } from "@/store/WorkModule";
import gsap from "gsap";

export default class CategoryWork extends Vue {
    private get works(): WorkConfig[] {
        return workModule.workConfigs;
    }

    private get hoveredWork(): string {
        return workModule.workId;
    }

    private linkClasses(workId: string): string[] {
        const classes: string[] = [];
        if (workModule.workId !== "" && workModule.workId !== workId) {
            classes.push("thumbnail-not-hovering");
        }
        return classes;
    }

    private handleHoveredWorkChange(workId: string): void {}

    // private handleMouseEnter(elementId: string): void {
    //     gsap.to("#" + elementId, { opacity: 0.25, duration: 1 });
    // }

    // private handleMouseLeave(elementId: string): void {
    //     gsap.to("#" + elementId, { opacity: 1, duration: 1 });
    // }
}
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

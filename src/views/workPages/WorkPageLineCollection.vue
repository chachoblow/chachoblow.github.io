<template>
    <WorkPageGallery :work="work">
        <template #work-page-text-left>
            <p>
                I wanted to make something that only used collections of lines
                for visuals. Everything within this application (even the text)
                is simply a specifically placed line collection.
            </p>
        </template>
        <template #work-page-text-right>
            <p>
                In the main menu, you can choose to either arrange or watch 3
                different shapes: a circle, a square, and a triangle. While in
                the arrange portion, you can use the mouse wheel to make the
                shape's size different.
            </p>
            <p>
                The application was made with JavaScript. More specifically, it
                used the p5.js library.
            </p>
        </template>
    </WorkPageGallery>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WorkPageGallery from "@/components/WorkPageGallery.vue";
import { WorkConfig, workConfigs } from "@/model/WorkConfig";

export default defineComponent({
    components: {
        WorkPageGallery,
    },
    data() {
        return {
            idInternal: "lineCollection" as string | null,
        };
    },
    computed: {
        id(): string {
            if (this.idInternal === null) {
                throw new Error("Concrete class must implement idInternal.");
            }
            return this.idInternal;
        },
        work(): WorkConfig {
            const work = workConfigs().find((work) => work.id === this.id);
            if (work === undefined) {
                throw Error(`Work with ID [${this.id}] not found.`);
            }
            return work;
        },
    },
});
</script>

<style lang="scss"></style>

<template>
    <WorkPageFrame :work="work"></WorkPageFrame>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WorkPageFrame from "@/components/WorkPageFrame.vue";
import { WorkConfig, workConfigs } from "@/model/WorkConfig";

export default defineComponent({
    components: {
        WorkPageFrame,
    },
    data() {
        return {
            idInternal: "animations" as string | null,
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

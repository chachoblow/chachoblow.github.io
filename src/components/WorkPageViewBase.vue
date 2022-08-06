<template>
    <work-page-frame :work="work"></work-page-frame>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import WorkPageFrame from "@/components/WorkPageFrame.vue";
import { WorkConfig, workConfigs } from "@/model/WorkConfig";

@Options({
    components: {
        WorkPageFrame,
    },
})
// TODO: Have other work pages extend this component. For some reason, I was getting errors when
//  trying to do this.
export default class WorkPageViewBase extends Vue {
    protected idInternal: string | null = null;

    private get id(): string {
        if (this.idInternal === null) {
            throw new Error("Concrete class must implement idInternal.");
        }
        return this.idInternal;
    }

    private get work(): WorkConfig {
        const work = workConfigs().find((work) => work.id === this.id);
        if (work === undefined) {
            throw Error(`Work with ID [${this.id}] not found.`);
        }
        return work;
    }
}
</script>

<style lang="scss"></style>

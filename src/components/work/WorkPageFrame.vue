<template>
    <div>
        <work-page-navigation
            :associatedWork="associatedWork"
        ></work-page-navigation>
        <div class="work-container">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { WorkPageProps } from "@/model/WorkPage";
import WorkPageNavigation from "@/components/work/WorkPageNavigation.vue";

@Options({
    components: {
        WorkPageNavigation,
    },
})
export default class WorkPageFrame extends Vue.with(WorkPageProps) {}
</script>

<style scoped lang="scss">
.work-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
</style>

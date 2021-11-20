<template>
    <div>
        <work-page-navigation
            :associatedWork="associatedWork"
        ></work-page-navigation>
        <div class="content-container">
            <div class="details-container">
                <slot name="details"></slot>
            </div>
            <div class="work-container">
                <slot></slot>
            </div>
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
.content-container {
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: $small-device-width) {
        flex-direction: row;
    }

    > div {
        width: 100%;
        flex: 1;

        @media (min-width: $small-device-width) {
            width: 50%;
        }
    }
}

.details-container {
}

.work-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
</style>

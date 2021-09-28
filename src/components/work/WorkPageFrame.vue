<template>
    <div>
        <work-page-navigation
            :associatedWork="associatedWork"
        ></work-page-navigation>
        <div class="work-container">
            <div class="work-details">
                <h1>{{ title }}</h1>
                <ul>
                    <li v-for="detail in details" :key="detail">
                        {{ detail }}
                    </li>
                </ul>
            </div>
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
    padding: $view-container-padding-small;

    h1 {
        padding-bottom: 40px;
        margin: 0;
    }

    ul {
        padding-bottom: 40px;
    }

    @media (min-width: $small-device-width) {
        padding: $view-container-padding-large;
        flex-direction: row;
    }
}

.work-details {
    width: 100%;
    text-align: left;
    padding-right: 0;

    @media (min-width: $small-device-width) {
        width: 250px;
        flex-shrink: 0;
        padding-right: 40px;
    }
}

ul li {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 10px;
}
</style>

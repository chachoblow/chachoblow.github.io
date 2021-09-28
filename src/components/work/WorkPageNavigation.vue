<template>
    <div>
        <div class="router-navigation router-navigation-large">
            <div v-if="previousWorkRoute">
                <router-link :to="previousWorkRoute">back</router-link>
                &nbsp;/&nbsp;
            </div>
            <div v-if="nextWorkRoute">
                <router-link :to="nextWorkRoute">next</router-link>
                &nbsp;/&nbsp;
            </div>
            <router-link to="/">close</router-link>
        </div>
        <div class="router-navigation router-navigation-small">
            <div v-if="previousWorkRoute">
                <router-link :to="previousWorkRoute">&#60;</router-link>
                &nbsp;/&nbsp;
            </div>
            <div v-if="nextWorkRoute">
                <router-link :to="nextWorkRoute">&#62;</router-link>
                &nbsp;/&nbsp;
            </div>
            <router-link to="/">&#10005;</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { workModule } from "@/store/WorkModule";
import { WorkPageNavigationProps } from "@/model/WorkPage";

export default class WorkPageNavigation extends Vue.with(
    WorkPageNavigationProps
) {
    private get currentWorkIndex(): number {
        // TODO: Error checking.
        let index = 0;
        for (let i = 0; i < workModule.workConfigsLength; i++) {
            const config = workModule.workConfigs[i];
            if (config.associatedWork === this.associatedWork) {
                index = i;
                break;
            }
        }
        return index;
    }

    private get previousWorkRoute(): string {
        const index = this.currentWorkIndex;
        return index === 0 ? "" : workModule.workConfigs[index - 1].routerLink;
    }

    private get nextWorkRoute(): string {
        const index = this.currentWorkIndex;
        return index === workModule.workConfigsLength - 1
            ? ""
            : workModule.workConfigs[this.currentWorkIndex + 1].routerLink;
    }
}
</script>

<style scoped lang="scss">
.router-navigation {
    display: flex;
    position: fixed;
    top: 20px;
    right: 20px;

    &-small {
        display: flex;

        @media (min-width: $small-device-width) {
            display: none;
        }
    }

    &-large {
        display: none;

        @media (min-width: $small-device-width) {
            display: flex;
        }
    }

    > div {
        display: flex;
    }

    @media (min-width: $small-device-width) {
        right: 40px;
    }
}

a:hover {
    background-color: #ffef00;
}
</style>

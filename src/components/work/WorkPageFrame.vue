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
        <div class="work-container">
            <div class="work-content-container">
                <div class="work-written-content">
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
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { WorkPageProps } from "@/model/WorkPage";
import { workModule } from "@/store/WorkModule";

export default class WorkPageFrame extends Vue.with(WorkPageProps) {
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
        if (this.currentWorkIndex === 0) {
            return "";
        }

        const previousWork = workModule.workConfigs[this.currentWorkIndex - 1];
        return previousWork.routerLink;
    }

    private get nextWorkRoute(): string {
        if (this.currentWorkIndex === workModule.workConfigsLength - 1) {
            return "";
        }

        const nextWork = workModule.workConfigs[this.currentWorkIndex + 1];
        return nextWork.routerLink;
    }
}
</script>

<style lang="scss">
$large-device-content-width: 250px;
$orientation-switch-width: 800px;

.work-container {
    display: flex;
    flex-direction: column;
    padding: 20px 20px 20px 20px;

    h1 {
        text-align: left;
        margin: 0;
        padding-bottom: 40px;
    }

    ul {
        padding-bottom: 40px;
    }

    @media (min-width: $orientation-switch-width) {
        padding: 20px 40px 40px 40px;
    }
}

.work-content-container {
    display: flex;
    flex-direction: column;

    @media (min-width: $orientation-switch-width) {
        flex-direction: row;
    }
}

.work-written-content {
    width: 100%;
    text-align: left;
    padding-right: 0;

    @media (min-width: $orientation-switch-width) {
        width: $large-device-content-width;
        flex-shrink: 0;
        padding-right: 40px;
    }
}

ul li {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 10px;
}

.close-work-button {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 60px;
    height: 60px;

    img {
        max-width: 100%;
    }
}

.router-navigation {
    display: flex;
    position: fixed;
    top: 20px;
    right: 20px;

    &-small {
        display: flex;

        @media (min-width: $orientation-switch-width) {
            display: none;
        }
    }

    &-large {
        display: none;

        @media (min-width: $orientation-switch-width) {
            display: flex;
        }
    }

    > div {
        display: flex;
    }

    @media (min-width: $orientation-switch-width) {
        right: 40px;
    }
}

a:hover {
    background-color: #ffef00;
}
</style>

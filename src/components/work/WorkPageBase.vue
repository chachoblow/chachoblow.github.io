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
                    <h1 v-html="perWordSpan(title)"></h1>
                    <ul>
                        <li
                            v-for="detail in details"
                            :key="detail"
                            v-html="perWordSpan(detail)"
                        ></li>
                    </ul>
                    <p v-for="paragraph in summary" :key="paragraph">
                        {{ paragraph }}
                    </p>
                </div>
                <div :class="imageContainerClasses">
                    <div v-for="image in images" :key="image">
                        <img :src="image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { perWordSpan } from "@/helpers/text";
import { Works } from "@/model/WorkConfig";
import { workModule } from "@/store/WorkModule";

class Props {
    title!: string;
    details!: string[];
    summary!: string[];
    images!: string[];
    portaitAspectRatio!: boolean;
    associatedWork!: Works;
}

export default class WorkPageBase extends Vue.with(Props) {
    private get imageContainerClasses(): string[] {
        let classes = ["work-media-content"];
        classes = this.portaitAspectRatio
            ? classes.concat("portait-aspect-ratio")
            : classes.concat("landscape-aspect-ratio");
        return classes;
    }

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

    private perWordSpan(text: string): string {
        return perWordSpan(text);
    }
}
</script>

<style lang="scss">
$large-device-content-width: 350px;
$orientation-switch-width: 1000px;

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
        padding-right: 40px;
    }
}

.work-media-content {
    display: flex;
    flex-direction: column;

    .portait-aspect-ratio {
        height: auto;
    }

    .landscape-aspect-ratio {
        height: calc(100vh - 150px);
    }

    div {
        width: calc(100% - $large-device-content-width);
        max-width: 800px;
    }

    img {
        object-fit: contain;
        max-height: 100%;
        max-width: 100%;
    }
}

li {
    display: flex;
    flex-wrap: wrap;
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

.work-page-summary {
    display: flex;
    flex-flow: wrap;
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
</style>

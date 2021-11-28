<template>
    <div>
        <header-main>
            <div class="router-navigation">
                <div v-if="nextWorkRoute">
                    <router-link :to="nextWorkRoute">next</router-link>
                    &nbsp;<span>/</span>&nbsp;
                </div>
                <div v-if="previousWorkRoute">
                    <router-link :to="previousWorkRoute">back</router-link>
                    &nbsp;<span>/</span>&nbsp;
                </div>
                <router-link to="/">close</router-link>
            </div>
        </header-main>
        <div class="content-container">
            <div class="details-container">
                <slot name="details">
                    <div class="details">
                        <div class="detail">
                            <div class="label">Project</div>
                            <div class="description">{{ work.title }}</div>
                        </div>
                        <div class="detail">
                            <div class="label">Description</div>
                            <div class="description">
                                {{ work.description }}
                            </div>
                        </div>
                        <div class="detail">
                            <div class="label">Media</div>
                            <div class="description">{{ work.media }}</div>
                        </div>
                        <div class="detail">
                            <div class="label">Year</div>
                            <div class="description">{{ work.year }}</div>
                        </div>
                        <div class="detail">
                            <div class="label">ID</div>
                            <div class="description">{{ work.identifier }}</div>
                        </div>
                    </div>
                    <div
                        class="full-description"
                        v-if="work.summary"
                        v-html="work.summary"
                    ></div>
                </slot>
            </div>
            <div class="work-container">
                <slot>
                    <div
                        v-if="work.customWorkHtml"
                        v-html="work.customWorkHtml"
                    ></div>
                    <div
                        v-else
                        v-for="image in work.images"
                        :key="image"
                        class="image-container"
                    >
                        <img :src="image" />
                    </div>
                </slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { WorkPageProps } from "@/model/WorkPage";
import { workModule } from "@/store/WorkModule";
import HeaderMain from "@/components/HeaderMain.vue";
import { Works } from "@/model/WorkConfig";

@Options({
    components: {
        HeaderMain,
    },
})
export default class WorkPageFrame extends Vue.with(WorkPageProps) {
    private get associatedWork(): Works {
        return this.work.associatedWork;
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
}
</script>

<style scoped lang="scss">
.content-container {
    display: flex;
    flex-direction: column;
    width: inherit;

    > div {
        width: 100%;

        @media (min-width: $small-device-width) {
            width: 50%;
        }
    }

    @media (min-width: $small-device-width) {
        flex-direction: row;
    }
}

.details-container {
    padding-bottom: 20px;

    @media (min-width: $small-device-width) {
        padding-bottom: 0px;
        padding-right: 5px;
    }

    .detail {
        display: flex;

        .label {
            width: 7rem;
        }

        .description {
            width: calc(100% - 7rem);
        }
    }

    .full-description {
        padding-top: 20px;

        ::v-deep(p:first-child) {
            margin-top: 0;
        }

        ::v-deep(p:last-child) {
            margin-bottom: 0; 
        }

        ::v-deep(p) {
            margin: 10px 0 10px 0;
        }
    }

    ::v-deep(a) {
        display: inline;
        text-decoration: underline;
    }
}

.work-container {
    display: flex;
    flex-direction: column;

    @media (min-width: $small-device-width) {
        position: fixed;
        right: 0;
        padding: 0 10px;
        // TODO: Find a better way to do this.
        height: calc(100% - 76px);
        overflow: auto;
        box-sizing: border-box;
    }
}

.image-container {
    width: 100%;
    height: 100%;

    @media (min-width: $small-device-width) {
        max-height: 80vh;
        max-width: 900px;
    }

    + .image-container {
        padding-top: 10px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: left;
    }
}

.router-navigation {
    display: flex;

    > div {
        display: flex;
    }
}
</style>

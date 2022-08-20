<template>
    <div>
        <HeaderMain>
            <div class="router-navigation">
                <div v-if="nextWorkRoute">
                    <RouterLink :to="nextWorkRoute">next</RouterLink>
                    &nbsp;<span>/</span>&nbsp;
                </div>
                <div v-if="previousWorkRoute">
                    <RouterLink :to="previousWorkRoute">back</RouterLink>
                    &nbsp;<span>/</span>&nbsp;
                </div>
                <RouterLink to="/">close</RouterLink>
            </div>
        </HeaderMain>
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
import { defineComponent, PropType } from "vue";
import HeaderMain from "@/components/HeaderMain.vue";
import { WorkConfig, Works } from "@/model/WorkConfig";
import { mapStores } from "pinia";
import { useWorkStore } from "@/stores/work";

export default defineComponent({
    components: {
        HeaderMain,
    },
    props: {
        work: {
            type: Object as PropType<WorkConfig>,
            required: true,
        },
    },
    computed: {
        associatedWork(): Works {
            return this.work.associatedWork;
        },
        previousWorkRoute(): string {
            const index = this.currentWorkIndex;
            return index === 0
                ? ""
                : this.workStore.workConfigs[index - 1].routerLink;
        },
        nextWorkRoute(): string {
            const index = this.currentWorkIndex;
            return index === this.workStore.workConfigsLength - 1
                ? ""
                : this.workStore.workConfigs[this.currentWorkIndex + 1]
                      .routerLink;
        },
        currentWorkIndex(): number {
            // TODO: Error checking.
            let index = 0;
            for (let i = 0; i < this.workStore.workConfigsLength; i++) {
                const config = this.workStore.workConfigs[i];
                if (config.associatedWork === this.associatedWork) {
                    index = i;
                    break;
                }
            }
            return index;
        },
        ...mapStores(useWorkStore),
    },
});
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
    margin-bottom: -10px;

    @media (min-width: $small-device-width) {
        position: fixed;
        right: 0;
        padding: 0 10px;
        // TODO: Find a better way to do this.
        height: calc(100% - 46px);
        overflow: auto;
        box-sizing: border-box;
        margin-bottom: 0;
    }
}

::v-deep(.image-container:last-child) {
    padding-bottom: 10px;
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

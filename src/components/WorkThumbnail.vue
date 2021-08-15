<template>
    <div class="work-thumbnail-container">
        <div class="work-thumbnail-image">
            <router-link :to="routerLink">
                <img :src="image" />
            </router-link>
        </div>
        <div class="work-thumbnail-info-container">
            <div class="work-thumbnail-title">
                <router-link :to="routerLink">
                    {{ title }}
                </router-link>
            </div>

            <span>-</span>
            <div class="work-thumbnail-description">{{ description }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { WorkThumbnailConfig } from "@/model/WorkThumbnailConfig";

class Props {
    workThumbnailConfig!: WorkThumbnailConfig;
}

export default class WorkThumbnail extends Vue.with(Props) {
    private get title(): string {
        return this.workThumbnailConfig.title;
    }

    private get tags(): string[] {
        return this.workThumbnailConfig.tags;
    }

    private get description(): string {
        return this.workThumbnailConfig.description;
    }

    private get image(): string {
        return this.workThumbnailConfig.image;
    }

    private get routerLink(): string {
        return this.workThumbnailConfig.routerLink;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.work-thumbnail-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    padding: 20px 0;

    @media (min-width: $small-device-width) {
        flex-direction: row;
        height: 350px;
    }
}

.work-thumbnail-info-container {
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: $small-device-width) {
        width: 25%;
    }
}

.work-thumbnail-title {
    font-size: 1.25rem;
    word-wrap: break-word;
    padding-bottom: 10px;
    width: fit-content;

    @media (min-width: $small-device-width) {
        padding-bottom: 20px;
        font-size: 1.5rem;
    }
}

.work-thumbnail-image {
    padding: 10px 0;

    @media (min-width: $small-device-width) {
        padding: 10px 30px;
    }
}

.work-thumbnail-description {
    font-size: 0.85rem;

    @media (min-width: $small-device-width) {
        font-size: 1rem;
    }
}

img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

a {
    color: black;
    text-decoration: none;
}
</style>

<template>
    <div :class="imageContainerClasses">
        <div v-for="image in images" :key="image">
            <img :src="image" />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

class Props {
    images!: string[];
    portaitAspectRatio!: boolean;
}

export default class WorkPageImages extends Vue.with(Props) {
    private get imageContainerClasses(): string[] {
        let classes = ["work-page-images-container"];
        classes = this.portaitAspectRatio
            ? classes.concat("portait-aspect-ratio")
            : classes.concat("landscape-aspect-ratio");
        return classes;
    }
}
</script>

<style lang="scss">
.work-page-images-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .portait-aspect-ratio {
        height: auto;
    }

    .landscape-aspect-ratio {
        height: calc(100vh - 150px);
    }

    div {
        width: 100vw;
        max-width: 800px;
    }

    img {
        object-fit: contain;
        max-height: 100%;
        max-width: 100%;
    }
}
</style>

<template>
    <HeaderMain></HeaderMain>
    <div class="gallery">
        <slot>
            <div
                v-for="html in work.customWorkHtml"
                :key="html"
                class="image-container"
                v-html="html"
            ></div>
            <div
                v-for="image in work.images"
                :key="image"
                class="image-container"
            >
                <img :src="image" />
            </div>
        </slot>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { WorkConfig } from "@/model/WorkConfig";
import HeaderMain from "@/components/HeaderMain.vue";

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
});
</script>

<style scoped lang="scss">
.gallery {
    @include page-padding;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    row-gap: $page-padding-small;
    padding-top: $page-padding-medium !important;
    max-width: 900px;
    margin: auto;

    @media (min-width: $small-device-width) {
        row-gap: $page-padding-medium;
        padding-top: 0 !important;
    }

    @media (min-width: $medium-device-width) {
        row-gap: $page-padding-large;
    }
}

.image-container {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
        max-width: 900px;
        max-height: 80vh;
        object-fit: contain;
        object-position: center;
    }
}
</style>

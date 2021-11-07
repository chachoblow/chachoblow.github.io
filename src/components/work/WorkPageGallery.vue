<template>
    <work-page-frame
        :title="title"
        :details="details"
        :associatedWork="associatedWork"
    >
        <slot>
            <div class="swiper-container">
                <div class="swiper">
                    <div class="swiper-wrapper">
                        <div
                            v-for="image in images"
                            :key="image"
                            class="swiper-slide"
                        >
                            <img :src="image" />
                        </div>
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </slot>
    </work-page-frame>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { WorkPageGalleryProps } from "@/model/WorkPage";
import WorkPageFrame from "@/components/work/WorkPageFrame.vue";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";

Swiper.use([Navigation, Pagination]);

@Options({
    components: {
        WorkPageFrame,
    },
})
export default class WorkPageGallery extends Vue.with(WorkPageGalleryProps) {
    mounted(): void {
        new Swiper(".swiper", {
            spaceBetween: 400,
            slidesPerView: 1,
            allowTouchMove: false,
            keyboard: {
                enabled: true,
            },
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
            navigation: {
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
            },
        });
    }
}
</script>

<style lang="scss">
$max-image-width-large: 1000px;
$max-image-height-large: 80vh;

.swiper-container {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    max-width: $max-image-width-large;
    max-height: $max-image-height-large;
    padding: 40px 100px;
}

.swiper-wrapper {
    align-items: center;
}

.swiper {
    width: 100%;
    user-select: none;
}

.swiper-slide {
    display: flex;
    justify-content: center;
    max-width: $max-image-width-large;
    max-height: $max-image-height-large;
}

.swiper-slide img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.swiper-button-next,
.swiper-button-prev {
    color: black;
}

.swiper-button-disabled {
    display: none;
}
</style>

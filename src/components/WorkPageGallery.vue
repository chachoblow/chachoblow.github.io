<template>
    <div>
        <div class="work-page-header">
            <RouterLink to="/">Close</RouterLink>
        </div>
        <div class="work-page-content"></div>
        <div class="content-container">
            <div id="galleryThumbnails" class="gallery-thumbnails">
                <div
                    v-for="thumbnail in work.thumbnails"
                    :key="thumbnail"
                    class="thumbnail-container"
                >
                    <img :src="thumbnail" rel="preload" />
                </div>
            </div>
        </div>
        <div class="gallery">
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
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { WorkConfig } from "@/model/WorkConfig";
import { mapStores } from "pinia";
import { useWorkStore } from "@/stores/work";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineComponent({
    props: {
        work: {
            type: Object as PropType<WorkConfig>,
            required: true,
        },
    },
    computed: {
        ...mapStores(useWorkStore),
    },
    mounted() {
        window.onscroll = this.scrollHandler;
    },
    methods: {
        scrollHandler() {
            const scrollTop =
                document.body.scrollTop || document.documentElement.scrollTop;
            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const windowScrolled = scrollTop / height;

            const galleryThumbnailsElement =
                document.getElementById("galleryThumbnails")!;
            const galleryThumbnailsHeight =
                galleryThumbnailsElement.scrollHeight ||
                galleryThumbnailsElement.clientHeight;
            const galleryThumbnailScrollEquivalent =
                (galleryThumbnailsHeight * windowScrolled) / 2;

            gsap.to("#galleryThumbnails", {
                y: -galleryThumbnailScrollEquivalent,
                duration: 0.5,
            });
        },
    },
});
</script>

<style scoped lang="scss">
.work-page-header {
    position: fixed;
    top: 10px;
    right: 10px;
}

.content-container {
    display: flex;
}

.gallery-thumbnails {
    position: fixed;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: calc(50vh - 50px);
}

.thumbnail-container {
    width: 100px;
    padding-bottom: 10px;
}

img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: left;
}

.gallery {
    position: absolute;
    left: 25%;
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    scroll-snap-type: y mandatory;
}

.image-container {
    height: 100vh;
    scroll-snap-align: start;

    @media (min-width: $small-device-width) {
        max-height: 80vh;
        max-width: 900px;
    }

    + .image-container {
        padding: 100px 0;
    }
}
</style>

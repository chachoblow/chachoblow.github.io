<template>
    <div>
        <div class="work-page-header">
            <RouterLink to="/">Close</RouterLink>
        </div>
        <div class="work-page-content"></div>
        <div class="content-container">
            <div id="galleryThumbnails" class="gallery-thumbnails">
                <div
                    v-for="(thumbnail, index) in work.thumbnails"
                    :key="thumbnail"
                    :class="thumbnailContainerClasses(index)"
                >
                    <img
                        :src="thumbnail"
                        rel="preload"
                        @click="handleThumbnailClick(index)"
                    />
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
                    v-for="(image, index) in work.images"
                    :key="image"
                    :id="`imageContainer${index}`"
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
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default defineComponent({
    props: {
        work: {
            type: Object as PropType<WorkConfig>,
            required: true,
        },
    },
    data() {
        const images: unknown[] = [];
        const currentImage: unknown = null;
        const currentIndex = 0;

        return {
            images: images,
            currentImage: currentImage,
            currentIndex: currentIndex,
        };
    },
    computed: {
        ...mapStores(useWorkStore),
    },
    mounted() {
        window.onscroll = this.scrollHandler;

        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(ScrollToPlugin);

        this.images = gsap.utils.toArray(".image-container");
        this.currentImage = this.images[0];

        gsap.defaults({ overwrite: "auto", duration: 0.3 });
        gsap.set(".image-container", { opacity: 0 });
        gsap.set(this.currentImage as any, { opacity: 1 });
        gsap.set("body", { height: this.images.length * 100 + "%" });

        this.images.forEach((image, i) => {
            ScrollTrigger.create({
                start: () => (i - 0.5) * innerHeight,
                end: () => (i + 0.5) * innerHeight,
                onToggle: (self) => {
                    self.isActive && this.setWorkImage(image, i);
                },
            });
        });
    },
    methods: {
        scrollHandler() {
            const pageScrolled = this.getPageScrolled();
            const thumbnailHeight = this.getThumbnailHeight();
            const thumbnailScroll = (thumbnailHeight * pageScrolled) / 2;
            gsap.to("#galleryThumbnails", {
                y: -thumbnailScroll,
                duration: 0.5,
            });
        },
        getPageScrolled(): number {
            const scrollTop =
                document.body.scrollTop || document.documentElement.scrollTop;
            const pageHeight =
                document.documentElement.scrollHeight ||
                document.documentElement.clientHeight;
            return scrollTop / pageHeight;
        },
        getThumbnailHeight(): number {
            const element = document.getElementById("galleryThumbnails")!;
            return element.scrollHeight || element.clientHeight;
        },
        setWorkImage(newImage: unknown, index: number) {
            if (newImage != this.currentImage) {
                this.currentIndex = index;
                gsap.to(this.currentImage as any, {
                    opacity: 0,
                    duration: 0.25,
                });
                gsap.to(newImage as any, { opacity: 1, duration: 0.25 });
                this.currentImage = newImage;
            }
        },
        thumbnailContainerClasses(index: number): string[] {
            const classes = ["thumbnail-container"];
            if (index === this.currentIndex) {
                classes.push("viewed");
            }
            return classes;
        },
        handleThumbnailClick(index: number): void {
            const pageHeight =
                document.documentElement.scrollHeight ||
                document.documentElement.clientHeight;
            const scroll = (pageHeight / this.images.length) * index;
            gsap.to(window, {
                duration: 0.75,
                scrollTo: { y: scroll },
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
    z-index: 2;
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
    opacity: 0.25;

    &.viewed {
        opacity: 1;
    }

    img {
        cursor: pointer;
    }
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
}

.image-container {
    height: 100vh;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 900px;
        max-height: 80vh;
        object-position: center;
    }
}
</style>

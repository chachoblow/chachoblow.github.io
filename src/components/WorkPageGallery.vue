<template>
    <div>
        <div class="work-page-header">
            <RouterLink to="/">Close</RouterLink>
        </div>
        <div>
            <div id="workPageText" class="work-page-text">
                <div>
                    <slot name="work-page-text-left"></slot>
                </div>
                <div>
                    <slot name="work-page-text-right"></slot>
                </div>
            </div>
            <div :class="galleryContainerClasses">
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
        const enableGallery = false;

        return {
            images: images,
            currentImage: currentImage,
            currentIndex: currentIndex,
            enableGallery: enableGallery,
        };
    },
    computed: {
        galleryContainerClasses(): string[] {
            const classes = ["gallery-container"];
            if (this.enableGallery) {
                classes.push("enable-gallery");
            }
            return classes;
        },
        ...mapStores(useWorkStore),
    },
    mounted() {
        window.addEventListener("scroll", this.scrollHandler);

        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(ScrollToPlugin);

        this.images = gsap.utils.toArray(".image-container");
        this.currentImage = this.images[0];

        const textHeight = this.getWorkTextHeight();

        gsap.defaults({ overwrite: "auto", duration: 0.3 });
        gsap.set(".image-container", { opacity: 0 });
        gsap.set(this.currentImage as any, { opacity: 1 });
        // TODO: Calculate this on resize.
        gsap.set("body", {
            height: `calc(${this.images.length * 100}% + ${textHeight}px`,
        });

        this.images.forEach((image, i) => {
            ScrollTrigger.create({
                start: () => (i - 0.5) * innerHeight + textHeight,
                end: () => (i + 0.5) * innerHeight + textHeight,
                onToggle: (self) => {
                    self.isActive && this.setWorkImage(image, i);
                },
            });
        });
    },
    unmounted() {
        gsap.set("body", { height: "100%" });
        window.removeEventListener("scroll", this.scrollHandler);
    },
    methods: {
        getWorkTextHeight(): number {
            const workTextElement = document.getElementById("workPageText")!;
            return workTextElement.scrollHeight || workTextElement.clientHeight;
        },
        scrollHandler() {
            const galleryScrolled = this.getGalleryScrolled();
            this.enableGallery = galleryScrolled > 0;
            if (this.enableGallery) {
                const thumbnailHeight = this.getThumbnailHeight();
                const thumbnailScroll = (thumbnailHeight * galleryScrolled) / 2;
                gsap.to("#galleryThumbnails", {
                    y: -thumbnailScroll,
                    duration: 0.5,
                });
            }
        },
        getGalleryScrolled(): number {
            const workTextHeight = this.getWorkTextHeight();
            const scrollTop =
                document.body.scrollTop || document.documentElement.scrollTop;

            if (scrollTop < workTextHeight) {
                return 0;
            }

            let pageHeight =
                document.documentElement.scrollHeight ||
                document.documentElement.clientHeight;
            pageHeight -= workTextHeight;
            return (scrollTop - workTextHeight) / (pageHeight - workTextHeight);
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
            const workTextHeight = this.getWorkTextHeight();
            const pageHeight =
                document.documentElement.scrollHeight ||
                document.documentElement.clientHeight;
            const scroll =
                (pageHeight / this.images.length) * index + workTextHeight;
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

.work-page-text {
    display: flex;

    > div {
        width: 50%;

        &:first-child {
            padding-left: $page-padding;
            padding-right: calc($page-padding / 2);
        }

        &:nth-child(2) {
            padding-right: $page-padding;
            padding-left: calc($page-padding / 2);
        }
    }
}

.gallery-container {
    position: relative;
    top: 0;
    height: 100vh;
    width: 100%;

    &.enable-gallery {
        position: fixed;
    }
}

.gallery-thumbnails {
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
    top: 0;
    left: 25%;
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.image-container {
    height: 100vh;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
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

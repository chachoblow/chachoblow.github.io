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
            <div class="gallery-container">
                <div id="galleryThumbnails" :class="galleryThumbnailsClasses">
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
        const currentImageIndex = 0;
        const enableGallery = false;

        return {
            images: images,
            currentImageIndex: currentImageIndex,
            enableGallery: enableGallery,
        };
    },
    computed: {
        galleryThumbnailsClasses(): string[] {
            const classes = ["gallery-thumbnails"];
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
        const textHeight = this.getWorkTextHeight();

        this.images.forEach((image, i) => {
            ScrollTrigger.create({
                start: () => (i - 0.5) * innerHeight + textHeight,
                end: () => (i + 0.5) * innerHeight + textHeight,
                onToggle: (self) => {
                    self.isActive && this.setWorkImage(i);
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
                this.setThumbnailsScroll(galleryScrolled);
            }
        },
        getGalleryScrolled(): number {
            const workTextHeight = this.getWorkTextHeight();
            const scrollTop =
                document.body.scrollTop || document.documentElement.scrollTop;
            if (scrollTop < workTextHeight) {
                return 0;
            }
            const pageHeight =
                document.documentElement.scrollHeight ||
                document.documentElement.clientHeight;
            return (scrollTop - workTextHeight) / (pageHeight - workTextHeight);
        },
        setThumbnailsScroll(galleryScrolled: number): void {
            const thumbnailsHeight = this.getThumbnailsHeight();
            const thumbnailsScroll = (thumbnailsHeight * galleryScrolled) / 2;
            gsap.to("#galleryThumbnails", {
                y: -thumbnailsScroll,
                duration: 0.5,
            });
        },
        getThumbnailsHeight(): number {
            const element = document.getElementById("galleryThumbnails")!;
            return element.scrollHeight || element.clientHeight;
        },
        setWorkImage(index: number) {
            this.currentImageIndex = index;
        },
        thumbnailContainerClasses(index: number): string[] {
            const classes = ["thumbnail-container"];
            if (index === this.currentImageIndex) {
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
    font-size: 1.5rem;

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
}

.gallery-thumbnails {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 40px 0;

    &.enable-gallery {
        position: fixed;
        top: 0;
    }
}

.thumbnail-container {
    width: 100px;
    opacity: 0.25;

    + .thumbnail-container {
        padding-top: 10px;
    }

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

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

        this.images = gsap.utils.toArray(".image-container");
        this.currentImage = this.images[0];

        gsap.defaults({ overwrite: "auto", duration: 0.3 });
        gsap.set(".image-container", { opacity: 0 });
        gsap.set(this.currentImage as any, { opacity: 1 });
        gsap.set("body", { height: this.images.length * 100 + "%" });

        this.images.forEach((image, i) => {
            ScrollTrigger.create({
                // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
                start: () => (i - 0.5) * innerHeight,
                end: () => (i + 0.5) * innerHeight,
                // when a new section activates (from either direction), set the section accordinglyl.
                onToggle: (self) => {
                    self.isActive && this.setImage(image, i);
                },
                snap: 1 / (this.images.length - 1),
            });
            // gsap.from(image as any, {
            //     scrollTrigger: {
            //         trigger: image as any,
            //         scrub: true,
            //         start: () => (i - 0.5) * innerHeight,
            //         end: () => ((i + 0.5) * innerHeight) / 2,
            //     },
            //     opacity: 0,
            // });
            // gsap.to(image as any, {
            //     scrollTrigger: {
            //         trigger: image as any,
            //         scrub: true,
            //         start: () => (i - 0.5) * innerHeight,
            //         end: () => (i + 0.5) * innerHeight,
            //     },
            //     opacity: 1,
            // });
        });
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
        setImage(newImage: unknown, index: number) {
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

<template>
    <div>
        <HeaderMain></HeaderMain>
        <div class="work-container">
            <p>
                I wanted to make something that only used collections of lines
                for visuals. Everything within this application (even the text)
                is simply a specifically placed line collection.
            </p>
            <img :src="work.images[0]" rel="preload" />
            <p>
                In the main menu, you can choose to either arrange or watch 3
                different shapes: a circle, a square, and a triangle. While in
                the arrange portion, you can use the mouse wheel to make the
                shape's size different.
            </p>
            <img :src="work.images[1]" rel="preload" />
            <img :src="work.images[2]" rel="preload" />
            <img :src="work.images[3]" rel="preload" />
            <p>
                The application was made with JavaScript. More specifically, it
                used the p5.js library.
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { WorkConfig, workConfigs } from "@/model/WorkConfig";
import HeaderMain from "@/components/HeaderMain.vue";

export default defineComponent({
    components: {
        HeaderMain,
    },
    data() {
        return {
            idInternal: "lineCollection" as string | null,
        };
    },
    computed: {
        id(): string {
            if (this.idInternal === null) {
                throw new Error("Concrete class must implement idInternal.");
            }
            return this.idInternal;
        },
        work(): WorkConfig {
            const work = workConfigs().find((work) => work.id === this.id);
            if (work === undefined) {
                throw Error(`Work with ID [${this.id}] not found.`);
            }
            return work;
        },
    },
});
</script>

<style scoped lang="scss">
.work-container {
    @include page-padding;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    padding-top: 0 !important;
    margin: auto;
    padding-top: $page-padding-medium !important;

    @media (min-width: $small-device-width) {
        padding-top: 0 !important;
    }
}

p {
    margin: 0;

    + p {
        margin-top: $page-padding-small;
    }
}

a {
    display: unset;
}

img {
    @include page-padding;
    padding-left: 0 !important;
    padding-right: 0 !important;
    width: 100%;
    max-width: 900px;
    max-height: 80vh;
    object-fit: contain;
    object-position: center;
    margin: auto;

    + img {
        padding-top: 0 !important;
    }
}
</style>

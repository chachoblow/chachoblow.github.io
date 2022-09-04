<template>
    <div>
        <HeaderMain></HeaderMain>
        <div class="work-container">
            <p>
                Virtual Fixtures is a roguelike cave exploration game developed
                in Java. The game was inspired by the graphic novel series
                <a
                    href="https://en.wikipedia.org/wiki/East_of_West"
                    title="Wikipedia entry for East of West"
                    target="_blank"
                >
                    East of West</a
                >.
            </p>
            <p>
                In Virtual Fixtures, you are trapped in a cave with your Buddy -
                a hovering AI bot which can project the virtual world for you.
                You need this projection in order to see where hidden energies
                are. The downside is that when in the virtual world, you cannot
                see the numreous traps that riddle the cave in the physical
                world. Therefore, you must switch back and forth between the two
                worlds - using one world to find the energies, and the other to
                avoid traps.
            </p>
            <img :src="work.images[0]" rel="preload" />
            <p>
                When you start the game, you are placed in the middle of a
                procedurally generated cave system. You can see this below. Note
                that the HUD displays what your cursor is currently hovering
                over.
            </p>
            <img :src="work.images[1]" rel="preload" />
            <p>
                A main feature that I implemented for this game was ray-casting.
                You can only see parts of the cave that are within your current
                line of sight (or parts that you have seen in the past). In
                order to do this, I used
                <a
                    href="https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm"
                    title="Wikipedia entry for Bresenham's line algorithm"
                    target="_blank"
                >
                    Bresenham's line algorithm</a
                >. This can be seen below.
            </p>
            <p>
                The main feature of the game is that you can switch between the
                physical and virtual worlds. In doing this, you can avoid traps
                while also searching for energies. Another caveat is that when
                in the virtual world, you can no longer see remembered parts of
                the cave. You are limited to what is currently in view only.
            </p>
            <img :src="work.images[2]" rel="preload" />
            <p>
                If you would like to see a more in-depth explanation of the
                game, please watch
                <a
                    href="https://youtu.be/C-yfkUNuN_M"
                    title="YouTube link to game walkthrough"
                    target="_blank"
                >
                    my video on YouTube</a
                >.
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { WorkConfig } from "@/model/WorkConfig";
import { mapStores } from "pinia";
import { useWorkStore } from "@/stores/work";
import HeaderMain from "@/components/HeaderMain.vue";

export default defineComponent({
    components: {
        HeaderMain,
    },
    data() {
        return {
            idInternal: "virtualFixtures",
        };
    },
    computed: {
        ...mapStores(useWorkStore),
        work(): WorkConfig {
            return this.workStore.work(this.idInternal);
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

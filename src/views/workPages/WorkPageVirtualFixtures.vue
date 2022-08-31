<template>
    <WorkPageGallery :work="work">
        <template #work-page-text-left>
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
            <p>
                When you start the game, you are placed in the middle of a
                procedurally generated cave system. You can see this below. Note
                that the HUD displays what your cursor is currently hovering
                over.
            </p>
        </template>
        <template #work-page-text-right>
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
        </template>
    </WorkPageGallery>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WorkPageGallery from "@/components/WorkPageGallery.vue";
import { WorkConfig, workConfigs } from "@/model/WorkConfig";

export default defineComponent({
    components: {
        WorkPageGallery,
    },
    data() {
        return {
            idInternal: "virtualFixtures" as string | null,
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
a {
    display: unset;
}

img {
    width: 100%;
    max-width: 900px;
    max-height: 80vh;
    object-fit: contain;
    object-position: top left;
}
</style>

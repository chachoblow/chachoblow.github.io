<template>
    <work-page-frame
        :title="title"
        :details="details"
        :associatedWork="associatedWork"
    >
        <div class="work-summary">
            <p>
                Virtual Fixtures is a roguelike cave exploration game developed
                in Java. The game was inspired by the graphic novel series East
                of West.
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
            <img :src="images[0]" />
            <p>
                A main feature that I implemented for this game was ray-casting.
                You can only see parts of the cave that are within your current
                line of sight (or parts that you have seen in the past). In
                order to do this, I used Bresenham's line algorithm. This can be
                seen below.
            </p>
            <img :src="images[1]" />
            <p>
                The main feature of the game is that you can switch between the
                physical and virtual worlds. In doing this, you can avoid traps
                while also searching for energies. Another caveat is that when
                in the virtual world, you can no longer see remembered parts of
                the cave. You are limited to what is currently in view only.
            </p>
            <img :src="images[2]" />
            <p>
                If you would like to see a more in-depth explanation of the
                game, please watch my video on YouTube.
            </p>
        </div>
    </work-page-frame>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import WorkPageFrame from "@/components/work/WorkPageFrame.vue";
import { Works } from "@/model/WorkConfig";

@Options({
    components: {
        WorkPageFrame,
    },
})
export default class VirtualFixtures extends Vue {
    private title = "Virtual fixtures";
    private details = ["2018", "Digital, software, video game"];
    private images = [
        require("../../assets/virtual-fixtures/game-hud.gif"),
        require("../../assets/virtual-fixtures/game-ray-casting.gif"),
        require("../../assets/virtual-fixtures/game-switch-worlds.gif"),
    ];
    private associatedWork = Works.VirtualFixtures;
}
</script>

<style lang="scss">
.work-summary {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    max-width: 600px;
}

img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
}
</style>

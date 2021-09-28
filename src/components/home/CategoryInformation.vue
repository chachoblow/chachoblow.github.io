<template>
    <category-frame :title="'Information'">
        <p>
            <span>
                Wesley Klein is an artist, maker, builder, and fixer. He
                completed his mathematics and computer science degree at The
                University of California, Berkeley. He is seeking oppurtunites
                within the software engineering field. Specifically, he is
                interested in virtual reality, agumented reality, creative
                coding, web design, and in a broad sense, the intersection of
                art and technology.
            </span>
        </p>
        <p>
            <span>
                Apart from his studies, he enjoys making small, alternative
                comics and illustrations. He is currently learning to animate as
                well. He is highly interested in merging more traditional
                artistic endevours, such as, drawing and illustration, with new
                technologies. He is exploring the ways in which
                microcontrollers, web technologies, virtual reality, and
                creative coding frameworks can be merged with alternative
                comics, animation, and drawing.
            </span>
        </p>
    </category-frame>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import CategoryFrame from "@/components/home/CategoryFrame.vue";
import { perWordSpan } from "@/helpers/text";

@Options({
    components: {
        CategoryFrame,
    },
})
export default class CategoryInformation extends Vue {
    // TODO: Can probably delete this.
    private informationText(): string[] {
        const paragraphs = [
            "Wesley Klein is an artist, maker, builder, and fixer. He " +
                "completed his mathematics and computer science degree at " +
                "The University of California, Berkeley. He is seeking " +
                "oppurtunites within the software engineering field. " +
                "Specifically, he is interested in virtual reality, " +
                "agumented reality, creative coding, web design, and in a " +
                "broad sense, the intersection of art and technology.",
            "Apart from his studies, he enjoys making small, " +
                "alternative comics and illustrations. He is currently " +
                "learning to animate as well. He is highly interested in " +
                "merging more traditional artistic endevours, such as, " +
                "drawing and illustration, with new technologies. He is " +
                "exploring the ways in which microcontrollers, web " +
                "technologies, virtual reality, and creative coding " +
                "frameworks can be merged with alternative comics, " +
                "animation, and drawing.",
        ];

        let html = [];
        for (const paragraph of paragraphs) {
            html.push(paragraph);
        }
        return html;
    }
}
</script>

<style scoped lang="scss">
p {
    display: block;

    span {
        padding: 1px;
        background-color: white;
    }
}
</style>

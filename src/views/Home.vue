<template>
    <div class="home-container">
        <div class="background-image"></div>
        <h1 v-html="formatText('Wesley Klein')"></h1>
        <div class="category-container">
            <div class="category">
                <h2 class="category-title" v-html="formatText('Work')"></h2>
                <div class="category-content">
                    <ul>
                        <li
                            v-for="work in works"
                            :key="work.title"
                            v-html="formatText(work.title)"
                        ></li>
                    </ul>
                </div>
            </div>
            <div class="category">
                <h2
                    class="category-title"
                    v-html="formatText('Information')"
                ></h2>
                <div class="category-content">
                    <p
                        v-for="text in informationText()"
                        :key="text"
                        v-html="text"
                    ></p>
                </div>
            </div>
            <div class="category">
                <h2 class="category-title" v-html="formatText('Contact')"></h2>
                <div class="category-content">
                    <ul>
                        <li v-html="formatText('Github')"></li>
                        <li v-html="formatText('Instagram')"></li>
                        <li v-html="formatText('LinkedIn')"></li>
                        <li v-html="formatText('Email')"></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import {
    WorkThumbnailConfig,
    workThumbnailConfigs,
} from "@/model/WorkThumbnailConfig";
import { perWordSpan } from "@/helpers/text";

export default class Home extends Vue {
    private get works(): WorkThumbnailConfig[] {
        return workThumbnailConfigs();
    }

    // TODO: The method perWordSpan() is not recognized in the template.
    private formatText(text: string): string {
        return perWordSpan(text);
    }

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
            html.push(perWordSpan(paragraph));
        }
        return html;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.background-image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url("../assets/menu/leavesShadowInvert.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 90% auto;
    z-index: -1;

    @media (min-width: $small-device-width) {
        background-size: 50% auto;
    }
}

.home-container {
    text-align: left;
    padding: 20px 20px 40px 20px;
    font-family: "Space Mono", monospace;
    font-size: 1rem;

    @media (min-width: $small-device-width) {
        padding: 20px 40px 50px 40px;
    }
}

.category-container {
    display: flex;
    flex-direction: column;

    @media (min-width: $small-device-width) {
        flex-direction: row;
    }
}

.category {
    width: 100%;
    padding: 0;

    @media (min-width: $small-device-width) {
        width: 25%;
        padding: 0 20px;

        &:first-of-type {
            padding-left: 0;
        }

        &:last-of-type {
            padding-right: 0;
        }
    }
}

.category-content {
    p {
        display: flex;
        flex-wrap: wrap;
    }
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
        padding-bottom: $text-bottom-padding;
    }
}
</style>

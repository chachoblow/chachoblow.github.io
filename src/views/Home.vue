<template>
    <div class="home-container">
        <div class="background-image"></div>
        <h1 v-html="perWordSpan('Wesley Klein')"></h1>
        <div class="category-container">
            <category-work></category-work>
            <category-information></category-information>
            <category-contact></category-contact>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { perWordSpan } from "@/helpers/text";
import CategoryWork from "@/components/home/CategoryWork.vue";
import CategoryInformation from "@/components/home/CategoryInformation.vue";
import CategoryContact from "@/components/home/CategoryContact.vue";

@Options({
    components: {
        CategoryWork,
        CategoryInformation,
        CategoryContact,
    },
})
export default class Home extends Vue {
    private perWordSpan(text: string): string {
        return perWordSpan(text);
    }
}
</script>

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
</style>

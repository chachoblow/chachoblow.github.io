<template>
    <div class="information-container">
        <navigation-header></navigation-header>
        <about></about>
        <div class="information-break"></div>
        <contact></contact>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import NavigationHeader from "@/components/information/NavigationHeader.vue";
import About from "@/components/information/About.vue";
import Contact from "@/components/information/Contact.vue";

@Options({
    components: {
        NavigationHeader,
        About,
        Contact,
    },
})
export default class Information extends Vue {}
</script>

<style scoped lang="scss">
.information-container {
    padding: $view-container-padding-small;
    max-width: 1000px;
    margin: auto;

    @media (min-width: $small-device-width) {
        padding: $view-container-padding-large;
    }
}

.information-break {
    width: 40px;
    border-bottom: 1px solid black;
    margin: 40px 0;
}

.category-container {
    display: flex;
    flex-direction: column;
}

h1 {
    margin: 0;
    margin-bottom: 40px;
    padding: 20px 0 40px 0;

    span {
        padding: 1px;
        background-color: white;
    }

    @media (min-width: $small-device-width) {
        margin-bottom: 90px;
    }
}
</style>

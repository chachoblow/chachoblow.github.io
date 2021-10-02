<template>
    <div class="home-container">
        <h1>
            <span>Wesley Klein</span>
        </h1>
        <div class="category-container">
            <category-work></category-work>
            <category-information></category-information>
            <category-contact></category-contact>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
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
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.home-container {
    padding: $view-container-padding-small;
    max-width: 1000px;
    margin: auto;

    @media (min-width: $small-device-width) {
        padding: $view-container-padding-large;
    }
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

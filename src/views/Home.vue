<template>
    <div class="home-container">
        <header-main></header-main>
        <div class="work-container">
            <work-selections></work-selections>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import WorkSelections from "@/components/WorkSelections.vue";
import HeaderMain from "@/components/HeaderMain.vue";

@Options({
    components: {
        WorkSelections,
        HeaderMain,
    },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.home-container {
    display: flex;
    flex-direction: column;

    @media (min-width: $small-device-width) {
        //min-height: 100vh;
    }
}

.work-container {
    display: flex;
    flex-direction: column;
    width: 100%;
}
</style>

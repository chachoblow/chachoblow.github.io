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
import { gsap } from "gsap";

@Options({
    components: {
        WorkSelections,
        HeaderMain,
    },
})
export default class Home extends Vue {
    mounted(): void {
        const t1 = gsap.timeline();

        t1.set(".work-router-link", {
            opacity: 0,
        });

        t1.to(".work-router-link", {
            opacity: 1,
            duration: 0.5,
            delay: (pos) => pos * 0.1,
        });
    }
}
</script>

<style scoped lang="scss">
.home-container {
    display: flex;
    flex-direction: column;
}

.work-container {
    display: flex;
    flex-direction: column;
    width: 100%;
}
</style>

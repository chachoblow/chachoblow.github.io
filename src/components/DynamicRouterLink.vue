<template>
    <component :is="component"></component>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

class Props {
    label!: string;
    link!: string;
}

export default class DynamicRouterLink extends Vue.with(Props) {
    private get component(): Record<string, unknown> {
        const html =
            "<router-link to='" +
            this.link +
            "'>" +
            this.label +
            "</router-link>";
        return { template: html };
    }
}
</script>

<style scoped lang="scss"></style>

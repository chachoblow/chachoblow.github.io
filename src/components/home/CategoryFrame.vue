<template>
    <div :class="classes">
        <h2 class="category-title">
            <span>{{ title }}</span>
        </h2>
        <div class="category-content">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

class Props {
    title!: string;
    extraClasses?: string[];
}

export default class CategoryFrame extends Vue.with(Props) {
    protected get classes(): string[] {
        const baseClasses = ["category"];
        return this.extraClasses
            ? baseClasses.concat(this.extraClasses)
            : baseClasses;
    }
}
</script>

<style lang="scss">
.category {
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;

    + .category {
        padding-top: 60px;
    }

    @media (min-width: $small-device-width) {
        max-width: 1000px;
        flex-direction: row;
    }
}

.category-title {
    padding-bottom: 20px;
    width: 100%;
    margin: 0;

    @media (min-width: $small-device-width) {
        width: 35%;
    }
}

.category-title span {
    background-color: white;
}

.category-content {
    width: 100%;

    p {
        display: flex;
        flex-wrap: wrap;
    }
}

a {
    color: black;
    text-decoration: none;
    display: flex;
    align-items: baseline;

    &:hover {
        font-style: italic;
    }
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
        padding-bottom: $text-bottom-padding;
        width: fit-content;
    }
}
</style>

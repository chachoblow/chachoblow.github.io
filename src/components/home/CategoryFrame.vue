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
    width: 100vw;
    padding: 0;

    + .category {
        padding-top: 40px;
    }

    @media (min-width: $small-device-width) {
        width: 25vw;
        max-width: 430px;
        padding: 0 20px;

        &:first-of-type {
            padding-left: 0;
        }

        &:last-of-type {
            padding-right: 0;
        }

        + .category {
            padding-top: 0;
        }
    }
}

.category-title span {
    background-color: white;
}

.category-content {
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

    img {
        height: 15px;
        margin-left: 10px;
        background-color: white;
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

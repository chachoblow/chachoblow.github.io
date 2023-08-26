<template>
    <div class="work-container">
        <slot :work="work"></slot>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useWorkStore } from "@/stores/work";

const props = defineProps({
    id: {
        type: String,
        required: true
    }
});

const workStore = useWorkStore();

const work = computed(() => {
    return workStore.work(props.id);
});
</script>

<style lang="scss">
@import "@/scss/mixins.scss";

.work-container {
    @include page-padding;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    margin: auto;

    p {
        margin: 0;

        +p {
            margin-top: $page-padding-small;
        }
    }

    a {
        display: unset;
    }

    video,
    img {
        @include page-padding;
        padding-left: 0 !important;
        padding-right: 0 !important;
        width: 100%;
        max-width: 900px;
        max-height: 80vh;

        +img,
        +video {
            padding-top: 0 !important;
        }
    }

    img {
        object-fit: contain;
        object-position: center;
        margin: auto;
    }
}
</style>

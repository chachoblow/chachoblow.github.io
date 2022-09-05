<template>
    <div class="work-container">
        <slot :work="work"></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { WorkConfig } from "@/model/WorkConfig";
import { mapStores } from "pinia";
import { useWorkStore } from "@/stores/work";

export default defineComponent({
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    computed: {
        ...mapStores(useWorkStore),
        work(): WorkConfig {
            return this.workStore.work(this.id);
        },
    },
});
</script>

<style lang="scss">
.work-container {
    @include page-padding;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    padding-top: 0 !important;
    margin: auto;
    padding-top: $page-padding-medium !important;

    @media (min-width: $small-device-width) {
        padding-top: 0 !important;
    }

    p {
        margin: 0;

        + p {
            margin-top: $page-padding-small;
        }
    }

    a {
        display: unset;
    }

    img {
        @include page-padding;
        padding-left: 0 !important;
        padding-right: 0 !important;
        width: 100%;
        max-width: 900px;
        max-height: 80vh;
        object-fit: contain;
        object-position: center;
        margin: auto;

        + img {
            padding-top: 0 !important;
        }
    }
}
</style>

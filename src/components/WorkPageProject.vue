<template>
    <div class="work-container page-padding">
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

<!-- 
    Purposefully not scoped so that consumers have styles applied. However, then styling is global
      and so then need to prefix all stylings with ".work-container" so that other components aren't
      affected. There is probably a better way to solve this.
-->
<style>
.work-container {
    max-width: 900px;
    display: flex;
    flex-direction: column;
    margin: auto;
}

.work-container p {
    margin: 0;
}

.work-container p+p {
    margin-top: var(--page-padding-small);
}

.work-container a {
    display: unset;
}

.work-container video,
.work-container img {
    padding: var(--page-padding);
    padding-left: 0 !important;
    padding-right: 0 !important;
    width: 100%;
    max-width: 900px;
    max-height: 80vh;
}

.work-container video+video,
.work-container img+img {
    padding-top: 0 !important;
}

.work-container img {
    object-fit: contain;
    object-position: center;
    margin: auto;
}
</style>

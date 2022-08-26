<template>
    <div>
        <div class="work-page-header">
            <RouterLink to="/">Close</RouterLink>
        </div>
        <div class="content-container">
            <div class="content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { WorkConfig, Works } from "@/model/WorkConfig";
import { mapStores } from "pinia";
import { useWorkStore } from "@/stores/work";

export default defineComponent({
    props: {
        work: {
            type: Object as PropType<WorkConfig>,
            required: true,
        },
    },
    computed: {
        ...mapStores(useWorkStore),
    },
});
</script>

<style scoped lang="scss">
.work-page-header {
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 2;
}

.content-container {
    display: flex;
    justify-content: center;
    padding: 50px 0;
}

.content {
    width: 50%;
}
</style>

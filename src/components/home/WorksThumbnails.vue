<template>
    <div class="works-container">
        <div v-for="work in works" :key="work.title" class="work-container">

            <div class="work-title">
                <span>{{ work.title }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { WorkConfig } from "@/model/WorkConfig";
import { workModule } from "@/store/WorkModule";

export default class CategoryWork extends Vue {
    private workIcon = require("@/assets/icons/external-link.jpg");

    private get works(): WorkConfig[] {
        return workModule.workConfigs;
    }
}
</script>

<style scoped lang="scss">
.works-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}

.work-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    + .work-container {
        padding-top: 20px;
    }
}

.work-image-thumbnails {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    img {
        height: 150px;
        width: auto;
        padding: 5px;
    }
}
</style>

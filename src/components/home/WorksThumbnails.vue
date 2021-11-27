<template>
    <div class="works-container">
        <div v-for="work in works" :key="work.title" class="work-container">
            <router-link
                :to="work.routerLink"
                v-slot="{ href, navigate }"
                custom
            >
                <a :href="href" @click="navigate">{{ work.title }}</a>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { WorkConfig } from "@/model/WorkConfig";
import { workModule } from "@/store/WorkModule";

export default class CategoryWork extends Vue {
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

a {
    width: fit-content;
}
</style>

<template>
    <div class="work-router-links">
        <div v-for="work in works" :key="work.title" class="work-router-link">
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
.work-router-link {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    + .work-router-link {
        padding-top: 10px;
    }
}

a {
    width: fit-content;
}
</style>

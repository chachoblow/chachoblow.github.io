<template>
    <category-frame :title="'Work'">
        <ul>
            <li v-for="(work, index) in works" :key="work.title">
                <router-link
                    :to="work.routerLink"
                    v-slot="{ href, navigate }"
                    custom
                >
                    <a :href="href" @click="navigate">
                        <span class="work-index">{{ index }}.</span>
                        <span class="work-title">{{ work.title }}</span>
                    </a>
                </router-link>
            </li>
        </ul>
    </category-frame>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import CategoryFrame from "@/components/home/CategoryFrame.vue";
import { WorkConfig } from "@/model/WorkConfig";
import { workModule } from "@/store/WorkModule";

@Options({
    components: {
        CategoryFrame,
    },
})
export default class CategoryWork extends Vue {
    private get works(): WorkConfig[] {
        return workModule.workConfigs;
    }
}
</script>

<style scoped lang="scss">
span {
    background-color: white;
}

.work-index {
    font-size: 0.75rem;
    padding-right: 6px;
}
</style>

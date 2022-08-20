import { WorkConfig, workConfigs, Works } from "@/model/WorkConfig";
import { defineStore } from "pinia";

interface State {
    selectedWorks: Works;
    workId: string;
}

export const useWorkStore = defineStore("work", {
    state: (): State => ({
        selectedWorks: Works.None,
        workId: "",
    }),
    getters: {
        workConfigs(): WorkConfig[] {
            const configs = workConfigs();
            return configs.sort(function (a, b) {
                return a.order - b.order;
            });
        },
        workConfigsLength(): number {
            return this.workConfigs.length;
        },
    },
    actions: {
        setWorkId(id: string): void {
            this.workId = id;
        },
    },
});

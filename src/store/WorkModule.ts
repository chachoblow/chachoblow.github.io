import { WorkConfig, workConfigs, Works } from "@/model/WorkConfig";
import { VuexModule, Module, Mutation } from "vuex-class-modules";

@Module
class WorkModule extends VuexModule {
    selectedWork = Works.None;
    workId = "";

    get workConfigs(): WorkConfig[] {
        const configs = workConfigs();
        return configs.sort(function (a, b) {
            return a.order - b.order;
        });
    }

    get workConfigsLength(): number {
        return this.workConfigs.length;
    }

    @Mutation
    setWorkId(id: string) {
        this.workId = id;
    }
}

import store from "./index";
export const workModule = new WorkModule({ store, name: "work" });

import { WorkConfig, workConfigs, Works } from "@/model/WorkConfig";
import { VuexModule, Module } from "vuex-class-modules";

@Module
class WorkModule extends VuexModule {
    selectedWork = Works.None;

    get workConfigs(): WorkConfig[] {
        const configs = workConfigs();
        return configs.sort(function (a, b) {
            return a.order - b.order;
        });
    }

    get workConfigsLength(): number {
        return this.workConfigs.length;
    }
}

import store from "./index";
export const workModule = new WorkModule({ store, name: "work" });

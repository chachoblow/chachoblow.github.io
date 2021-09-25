import { WorkConfig, workConfigs } from "@/model/WorkConfig";
import { VuexModule, Module } from "vuex-class-modules";

@Module
class WorkModule extends VuexModule {
    get workConfigs(): WorkConfig[] {
        const configs = workConfigs();
        return configs.sort(function (a, b) {
            return a.order - b.order;
        });
    }
}

import store from "./index";
export const workModule = new WorkModule({ store, name: "work" });

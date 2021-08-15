import {
    WorkThumbnailConfig,
    workThumbnailConfigs,
} from "@/model/WorkThumbnailConfig";
import { VuexModule, Module, Mutation } from "vuex-class-modules";

@Module
class WorkModule extends VuexModule {
    selectedTags: string[] = [];
    availableThumbnailConfigs: WorkThumbnailConfig[] = workThumbnailConfigs();

    get selectedThumbnailConfigs(): WorkThumbnailConfig[] {
        const selectedThumbnailConfigs =
            this.selectedTags.length === 0
                ? this.availableThumbnailConfigs
                : this.filterThumbnailsBySelectedTags();

        return this.orderThumbnails(selectedThumbnailConfigs);
    }

    get availableTags(): string[] {
        const tags = new Set();
        for (const thumbnail of this.availableThumbnailConfigs) {
            thumbnail.tags.forEach((tag) => tags.add(tag));
        }
        return Array.from(tags) as string[];
    }

    private filterThumbnailsBySelectedTags(): WorkThumbnailConfig[] {
        const selectedThumbnailConfigsSet = new Set<WorkThumbnailConfig>();

        for (const thumbnailConfig of this.availableThumbnailConfigs) {
            const relevantThumbnail = thumbnailConfig.tags.some((tag) =>
                this.selectedTags.includes(tag)
            );
            if (relevantThumbnail) {
                selectedThumbnailConfigsSet.add(thumbnailConfig);
            }
        }

        return Array.from(selectedThumbnailConfigsSet);
    }

    private orderThumbnails(
        thumbnails: WorkThumbnailConfig[]
    ): WorkThumbnailConfig[] {
        return thumbnails.sort(function (a, b) {
            return a.order - b.order;
        });
    }

    @Mutation
    setSelectedTags(selectedTags: string[]): void {
        this.selectedTags = selectedTags;
    }
}

import store from "./index";
export const workModule = new WorkModule({ store, name: "work" });

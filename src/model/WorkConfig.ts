import { Work } from "./Works";
import { WorkImage } from "./WorkImage";

export interface WorkConfig {
    id: string;
    order: number;
    title: string;
    imageMenuCropped: WorkImage;
    imageMenuFull: WorkImage;
    routerLink: string;
    associatedWork: Work;
    images: WorkImage[];
    videos: string[],
    customWorkHtml?: string[];
}

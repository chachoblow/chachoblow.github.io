import { Works } from "./WorkConfig";

export class WorkPageProps {
    title!: string;
    details!: string[];
    summary!: string[];
    associatedWork!: Works;
}

export class WorkPageGalleryProps extends WorkPageProps {
    images!: string[];
    portaitAspectRatio!: boolean;
}

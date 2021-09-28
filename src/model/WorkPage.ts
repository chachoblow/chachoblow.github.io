import { Works } from "./WorkConfig";

export class WorkPageNavigationProps {
    associatedWork!: Works;
}

export class WorkPageProps extends WorkPageNavigationProps {
    title!: string;
    details!: string[];
}

export class WorkPageGalleryProps extends WorkPageProps {
    images!: string[];
    portaitAspectRatio!: boolean;
}

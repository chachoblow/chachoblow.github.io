// These should correspond to the the Vue components under views/workPages.
export enum Works {
    Animations = "Animations",
    Branches = "Branches",
    CreativeCoding = "CreativeCoding",
    Cyclux = "Cyclux",
    Illustrations = "Illustrations",
    LineCollection = "LineCollection",
    Photography = "Photography",
    VirtualFixtures = "VirtualFixtures",
    None = "None",
}

export interface WorkConfig {
    id: string;
    order: number;
    title: string;
    description: string;
    image: string;
    routerLink: string;
    associatedWork: Works;
}

export function workConfigs(): WorkConfig[] {
    return [
        {
            id: "cyclux",
            order: 10,
            title: "Cyclux",
            description: "comic",
            image: require("@/assets/menu/cyclux.png"),
            routerLink: "/cyclux",
            associatedWork: Works.Cyclux,
        },
        {
            id: "branches",
            order: 20,
            title: "Branches",
            description: "comic",
            image: require("@/assets/menu/branches.png"),
            routerLink: "/branches",
            associatedWork: Works.Branches,
        },
        {
            id: "illustrations",
            order: 30,
            title: "Illustrations",
            description: "art",
            image: require("@/assets/menu/illustrations.png"),
            routerLink: "/illustrations",
            associatedWork: Works.Illustrations,
        },
        {
            id: "animations",
            order: 40,
            title: "Animations",
            description: "art",
            image: require("@/assets/menu/animation.png"),
            routerLink: "/animations",
            associatedWork: Works.Animations,
        },
        {
            id: "virtualFixtures",
            order: 50,
            title: "Virtual fixtures",
            description: "video game",
            image: require("@/assets/menu/virtual-fixtures.png"),
            routerLink: "/virtualFixtures",
            associatedWork: Works.VirtualFixtures,
        },
        {
            id: "lineCollection",
            order: 60,
            title: "Line collection",
            description: "design",
            image: require("@/assets/menu/line-collection.png"),
            routerLink: "/lineCollection",
            associatedWork: Works.LineCollection,
        },
        {
            id: "photography",
            order: 70,
            title: "Photography",
            description: "art",
            image: require("@/assets/menu/photo.png"),
            routerLink: "/photography",
            associatedWork: Works.Photography,
        },
        {
            id: "creativeCoding",
            order: 80,
            title: "Creative coding",
            description: "software, art",
            image: require("@/assets/menu/processing-sketches.png"),
            routerLink: "/creativeCoding",
            associatedWork: Works.CreativeCoding,
        },
    ];
}

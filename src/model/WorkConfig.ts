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
    order: number;
    title: string;
    image: string;
    routerLink: string;
    associatedWork: Works;
}

export function workConfigs(): WorkConfig[] {
    return [
        {
            order: 10,
            title: "Cyclux",
            image: require("../assets/menu/cyclux.png"),
            routerLink: "/cyclux",
            associatedWork: Works.Cyclux,
        },
        {
            order: 20,
            title: "Branches",
            image: require("../assets/menu/branches.png"),
            routerLink: "/branches",
            associatedWork: Works.Branches,
        },
        {
            order: 30,
            title: "Illustrations",
            image: require("../assets/menu/illustrations.png"),
            routerLink: "/illustrations",
            associatedWork: Works.Illustrations,
        },
        {
            order: 40,
            title: "Animations",
            image: require("../assets/menu/animation.png"),
            routerLink: "/animations",
            associatedWork: Works.Animations,
        },
        {
            order: 50,
            title: "Virtual fixtures",
            image: require("../assets/menu/virtual-fixtures.png"),
            routerLink: "/virtualFixtures",
            associatedWork: Works.VirtualFixtures,
        },
        {
            order: 60,
            title: "Line collection",
            image: require("../assets/menu/line-collection.png"),
            routerLink: "/lineCollection",
            associatedWork: Works.LineCollection,
        },
        {
            order: 70,
            title: "Photography",
            image: require("../assets/menu/photo.png"),
            routerLink: "/photography",
            associatedWork: Works.Photography,
        },
        {
            order: 80,
            title: "Creative coding",
            image: require("../assets/menu/processing-sketches.png"),
            routerLink: "/creativeCoding",
            associatedWork: Works.CreativeCoding,
        },
    ];
}

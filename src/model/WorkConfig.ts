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
    description: string;
    image: string;
    routerLink: string;
    associatedWork: Works;
}

export function workConfigs(): WorkConfig[] {
    return [
        {
            order: 10,
            title: "Cyclux",
            description: "But what is the Cyclux?",
            image: require("../assets/menu/cyclux.png"),
            routerLink: "/cyclux",
            associatedWork: Works.Cyclux,
        },
        {
            order: 20,
            title: "Branches",
            description: "Branches, blowing in the wind.",
            image: require("../assets/menu/branches.png"),
            routerLink: "/branches",
            associatedWork: Works.Branches,
        },
        {
            order: 30,
            title: "Illustrations",
            description: "Can you hear me? Can I hear me?",
            image: require("../assets/menu/illustrations.png"),
            routerLink: "/illustrations",
            associatedWork: Works.Illustrations,
        },
        {
            order: 40,
            title: "Animations",
            description: "Have you ever woken up?",
            image: require("../assets/menu/animation.png"),
            routerLink: "/animations",
            associatedWork: Works.Animations,
        },
        {
            order: 50,
            title: "Virtual fixtures",
            description:
                "It's you and your buddy against digital Ascii characters.",
            image: require("../assets/menu/virtual-fixtures.png"),
            routerLink: "/virtualFixtures",
            associatedWork: Works.VirtualFixtures,
        },
        {
            order: 60,
            title: "Line collection",
            description: "Make art. Watch art. It's all lines anyways.",
            image: require("../assets/menu/line-collection.png"),
            routerLink: "/lineCollection",
            associatedWork: Works.LineCollection,
        },
        {
            order: 70,
            title: "Photography",
            description: "See title.",
            image: require("../assets/menu/photo.png"),
            routerLink: "/photography",
            associatedWork: Works.Photography,
        },
        {
            order: 80,
            title: "Creative coding",
            description: "Wait, what is non-creative coding?",
            image: require("../assets/menu/processing-sketches.png"),
            routerLink: "/creativeCoding",
            associatedWork: Works.CreativeCoding,
        },
    ];
}

export interface WorkConfig {
    order: number;
    title: string;
    description: string;
    image: string;
    routerLink: string;
}

export function workConfigs(): WorkConfig[] {
    return [
        {
            order: 10,
            title: "Cyclux",
            description: "But what is the Cyclux?",
            image: require("../assets/menu/cyclux.png"),
            routerLink: "/cyclux",
        },
        {
            order: 20,
            title: "Branches",
            description: "Branches, blowing in the wind.",
            image: require("../assets/menu/branches.png"),
            routerLink: "/branches",
        },
        {
            order: 30,
            title: "Illustrations",
            description: "Can you hear me? Can I hear me?",
            image: require("../assets/menu/illustrations.png"),
            routerLink: "/illustrations",
        },
        {
            order: 40,
            title: "Animations",
            description: "Have you ever woken up?",
            image: require("../assets/menu/animation.png"),
            routerLink: "/animations",
        },
        {
            order: 50,
            title: "Virtual Fixtures",
            description:
                "It's you and your buddy against digital Ascii characters.",
            image: require("../assets/menu/virtual-fixtures.png"),
            routerLink: "/virtualFixtures",
        },
        {
            order: 60,
            title: "Find NEO",
            description: "What Near-Earth object can I stress about today?",
            image: require("../assets/menu/find-neo.png"),
            routerLink: "/findNEO",
        },
        {
            order: 70,
            title: "Line Collection",
            description: "Make art. Watch art. It's all lines anyways.",
            image: require("../assets/menu/line-collection.png"),
            routerLink: "/lineCollection",
        },
        {
            order: 80,
            title: "Photography",
            description: "See title.",
            image: require("../assets/menu/photo.png"),
            routerLink: "/photography",
        },
        {
            order: 90,
            title: "Creative Coding",
            description: "Wait, what is non-creative coding?",
            image: require("../assets/menu/processing-sketches.png"),
            routerLink: "/creativeCoding",
        },
    ];
}

export interface WorkThumbnailConfig {
    title: string;
    tags: string[];
    description: string;
    image: string;
    routerLink: string;
}

export function workThumbnailConfigs(): WorkThumbnailConfig[] {
    return [
        {
            title: "Cyclux",
            tags: ["analog", "illustration", "comic"],
            description: "Various short-form comics.",
            image: require("../assets/menu/cyclux.png"),
            routerLink: "/cyclux",
        },
        {
            title: "Branches",
            tags: ["digital", "video game"],
            description: "Various short-form comics.",
            image: require("../assets/menu/branches.png"),
            routerLink: "/branches",
        },
        {
            title: "Illustrations",
            tags: ["analog", "digital", "illustration"],
            description:
                "A collection of illustrations done over the years that are both analog and digital.",
            image: require("../assets/menu/illustrations.png"),
            routerLink: "/illustrations",
        },
        {
            title: "Animations",
            tags: ["digital"],
            description:
                "A series of animations done digitally using Photoshop.",
            image: require("../assets/menu/animation.png"),
            routerLink: "/animations",
        },
        {
            title: "Virtual Fixtures",
            tags: ["digital", "video game"],
            description:
                "A rogue-like video game made using Java that is done in the style of ascii art.",
            image: require("../assets/menu/virtual-fixtures.png"),
            routerLink: "/virtualFixtures",
        },
        {
            title: "Find NEO",
            tags: ["digital", "video game"],
            description: "Find information about current near Earth objects.",
            image: require("../assets/menu/find-neo.png"),
            routerLink: "/findNEO",
        },
        {
            title: "Line Collection",
            tags: ["digital", "video game"],
            description: "Art making program made entirely of lines.",
            image: require("../assets/menu/line-collection.png"),
            routerLink: "/lineCollection",
        },
        {
            title: "Photography",
            tags: ["digital", "video game"],
            description: "Photgraphy captured over the years",
            image: require("../assets/menu/photo.png"),
            routerLink: "/photography",
        },
        {
            title: "Creative Coding",
            tags: ["digital", "video game"],
            description: "Creative coding sketches made mainly with P5.js.",
            image: require("../assets/menu/processing-sketches.png"),
            routerLink: "/creativeCoding",
        },
    ];
}

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
    images: string[];
}

export function workConfigs(): WorkConfig[] {
    return [
        {
            id: "cyclux",
            order: 10,
            title: "Cyclux",
            description: "ACA.2018.12.1",
            image: require("@/assets/menu/cyclux.png"),
            routerLink: "/cyclux",
            associatedWork: Works.Cyclux,
            images: [
                require("@/assets/comics/cyclux/cyclux-spread1.png"),
                require("@/assets/comics/cyclux/cyclux-spread2.png"),
                require("@/assets/comics/cyclux/cyclux-spread3.png"),
                require("@/assets/comics/cyclux/cyclux-spread4.png"),
                require("@/assets/comics/cyclux/cyclux-spread5.png"),
                require("@/assets/comics/cyclux/cyclux-spread6.png"),
            ]
        },
        {
            id: "branches",
            order: 20,
            title: "Branches",
            description: "ACA.2018.12.2",
            image: require("@/assets/menu/branches.png"),
            routerLink: "/branches",
            associatedWork: Works.Branches,
            images: [
                require("@/assets/comics/branches/branches-page1.png"),
                require("@/assets/comics/branches/branches-page2.png"),
                require("@/assets/comics/branches/branches-page3.png"),
                require("@/assets/comics/branches/branches-page4.png"),
                require("@/assets/comics/branches/branches-page5.png"),
                require("@/assets/comics/branches/branches-page6.png"),
                require("@/assets/comics/branches/branches-page7.png"),
            ]
        },
        {
            id: "illustrations",
            order: 30,
            title: "Illustrations",
            description: "AID.2018_2020",
            image: require("@/assets/menu/illustrations.png"),
            routerLink: "/illustrations",
            associatedWork: Works.Illustrations,
            images: [
                require("@/assets/illustrations/bat-person-1080h.png"),
                require("@/assets/illustrations/breaking-bad-1500h.jpg"),
                require("@/assets/illustrations/can-you-hear-me-1800h.jpg"),
                require("@/assets/illustrations/fried-1381h.jpg"),
                require("@/assets/illustrations/man-rock-900h.png"),
                require("@/assets/illustrations/woman-cursive-900h.png"),
                require("@/assets/illustrations/yellow-vision-1800h.jpg"),
            ]
        },
        {
            id: "animations",
            order: 40,
            title: "Animations",
            description: "AAD.2018.3.1",
            image: require("@/assets/menu/animation.png"),
            routerLink: "/animations",
            associatedWork: Works.Animations,
            images: [
                require("@/assets/illustrations/bat-person-1080h.png"),
                require("@/assets/illustrations/breaking-bad-1500h.jpg"),
                require("@/assets/illustrations/can-you-hear-me-1800h.jpg"),
                require("@/assets/illustrations/fried-1381h.jpg"),
                require("@/assets/illustrations/man-rock-900h.png"),
                require("@/assets/illustrations/woman-cursive-900h.png"),
                require("@/assets/illustrations/yellow-vision-1800h.jpg"),
            ]
        },
        {
            id: "virtualFixtures",
            order: 50,
            title: "Virtual fixtures",
            description: "ASD.2017.1",
            image: require("@/assets/menu/virtual-fixtures.png"),
            routerLink: "/virtualFixtures",
            associatedWork: Works.VirtualFixtures,
            images: [
                require("@/assets/illustrations/bat-person-1080h.png"),
                require("@/assets/illustrations/breaking-bad-1500h.jpg"),
                require("@/assets/illustrations/can-you-hear-me-1800h.jpg"),
                require("@/assets/illustrations/fried-1381h.jpg"),
                require("@/assets/illustrations/man-rock-900h.png"),
                require("@/assets/illustrations/woman-cursive-900h.png"),
                require("@/assets/illustrations/yellow-vision-1800h.jpg"),
            ]
        },
        {
            id: "lineCollection",
            order: 60,
            title: "Line collection",
            description: "ASD.2018.1",
            image: require("@/assets/menu/line-collection.png"),
            routerLink: "/lineCollection",
            associatedWork: Works.LineCollection,
            images: [
                require("@/assets/illustrations/bat-person-1080h.png"),
                require("@/assets/illustrations/breaking-bad-1500h.jpg"),
                require("@/assets/illustrations/can-you-hear-me-1800h.jpg"),
                require("@/assets/illustrations/fried-1381h.jpg"),
                require("@/assets/illustrations/man-rock-900h.png"),
                require("@/assets/illustrations/woman-cursive-900h.png"),
                require("@/assets/illustrations/yellow-vision-1800h.jpg"),
            ]
        },
        {
            id: "photography",
            order: 70,
            title: "Photography",
            description: "AD.2017_2019.10.1",
            image: require("@/assets/menu/photo.png"),
            routerLink: "/photography",
            associatedWork: Works.Photography,
            images: [
                require("@/assets/photographs/brittany-driving-1000h.jpg"),
                require("@/assets/photographs/dad-grandpa-1000h.jpg"),
                require("@/assets/photographs/grandma-chandelier-1000h.jpg"),
                require("@/assets/photographs/grandparents-window-1000h.jpg"),
                require("@/assets/photographs/grapevine-1000h.jpg"),
                require("@/assets/photographs/laguna-algea-1000h.jpg"),
                require("@/assets/photographs/laguna-ripples-1000h.jpg"),
                require("@/assets/photographs/me-bathroom-1000h.jpg"),
                require("@/assets/photographs/megan-dad-2-1000h.jpg"),
                require("@/assets/photographs/slit-scanning-1-1000h.jpg"),
                require("@/assets/photographs/slit-scanning-2-1000h.jpg"),
            ]
        },
        {
            id: "creativeCoding",
            order: 80,
            title: "Creative coding",
            description: "ASD.2018_2019.15.1",
            image: require("@/assets/menu/processing-sketches.png"),
            routerLink: "/creativeCoding",
            associatedWork: Works.CreativeCoding,
            images: [
                require("@/assets/illustrations/bat-person-1080h.png"),
                require("@/assets/illustrations/breaking-bad-1500h.jpg"),
                require("@/assets/illustrations/can-you-hear-me-1800h.jpg"),
                require("@/assets/illustrations/fried-1381h.jpg"),
                require("@/assets/illustrations/man-rock-900h.png"),
                require("@/assets/illustrations/woman-cursive-900h.png"),
                require("@/assets/illustrations/yellow-vision-1800h.jpg"),
            ]
        },
    ];
}

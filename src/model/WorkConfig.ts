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
    identifier: string;
    media: string;
    year: string;
    summary: string;
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
            description: "Short-form comic",
            identifier: "1",
            media: "Pen, pencil, highlighter, collage",
            year: "2018",
            summary: "A short-form comic initially made with pen, pencil, highlighter, and collage. It was later  transferred over to digitial. This is my first attempt at a comic.",
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
            description: "Short-form comic",
            identifier: "2",
            media: "Digital",
            year: "2018",
            summary: "A short-form comic made digitally with ProCreate on the iPad. This was later expanded into a larger project. Specifically, each page was engraved on acrylic and then bound in a larger, physical book. The expanded project is currently being documented and will be put on this website shortly.",
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
            description: "Collection of various illustrations",
            identifier: "3",
            media: "Digital",
            year: "2018-present",
            summary: "These are a collection of various illustrations I have made over the years. Everything was made with ProCreate on the iPad. Other works (both digital and analog) are being documented and will be up on the website shortly.",
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
            description: "Collection of various animations",
            identifier: "4",
            media: "Digital",
            year: "2018",
            summary: "These are a collection of various animations. Each animation is rotoscoped from various videos taken by me. To rotoscope and color, I used Photoshop and a Walcom tablet. The sound is from the original video, but augmented via Audacity.",
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
            description: "Video game",
            identifier: "5",
            media: "Software",
            year: "2017",
            summary: `
                Virtual Fixtures is a roguelike cave exploration game developed
                in Java. The game was inspired by the graphic novel series East
                of West.

                In Virtual Fixtures, you are trapped in a cave with your Buddy -
                a hovering AI bot which can project the virtual world for you.
                You need this projection in order to see where hidden energies
                are. The downside is that when in the virtual world, you cannot
                see the numreous traps that riddle the cave in the physical
                world. Therefore, you must switch back and forth between the two
                worlds - using one world to find the energies, and the other to
                avoid traps.

                When you start the game, you are placed in the middle of a
                procedurally generated cave system. You can see this below. Note
                that the HUD displays what your cursor is currently hovering
                over.

                A main feature that I implemented for this game was ray-casting.
                You can only see parts of the cave that are within your current
                line of sight (or parts that you have seen in the past). In
                order to do this, I used Bresenham's line algorithm. This can be
                seen below.

                The main feature of the game is that you can switch between the
                physical and virtual worlds. In doing this, you can avoid traps
                while also searching for energies. Another caveat is that when
                in the virtual world, you can no longer see remembered parts of
                the cave. You are limited to what is currently in view only.
                
                If you would like to see a more in-depth explanation of the
                game, please watch my video on YouTube.
            `,
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
            description: "Art tool made entirely of lines",
            identifier: "6",
            media: "Software",
            year: "2018",
            summary: "An art tool made with p5.js. Everything you see is made of entirely made of lines.",
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
            description: "Collection of various photographs",
            identifier: "7",
            media: "Digital",
            year: "2016-present",
            summary: "A collection of various photographs I have made over the years. Everything you see is digital.",
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
            description: "Collection of various creative coding sketches",
            identifier: "8",
            media: "Software",
            year: "2018-present",
            summary: "A collection of various creative coding sketches made with p5.js.",
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

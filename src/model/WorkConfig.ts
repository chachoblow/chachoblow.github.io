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
    imageMenuCropped: WorkImage;
    imageMenuFull: WorkImage;
    routerLink: string;
    associatedWork: Works;
    images: WorkImage[];
    thumbnails: string[];
    customWorkHtml?: string[];
}

export interface WorkImage {
    image: string,
    altText: string
}

export function workConfigs(): WorkConfig[] {
    return [
        {
            id: "cyclux",
            order: 10,
            title: "Cyclux",
            imageMenuCropped: { image: require("@/assets/menu/cropped/cyclux.webp"), altText: "Cyclux comic thumbnail" },
            imageMenuFull: { image: require("@/assets/menu/full/cyclux.webp"), altText: "Cyclux comic thumbnail" },
            routerLink: "/cyclux",
            associatedWork: Works.Cyclux,
            images: [
                { image: require("@/assets/comics/cyclux/cyclux-spread1.webp"), altText: "Page 1 of Cylclux" },
                { image: require("@/assets/comics/cyclux/cyclux-spread2.webp"), altText: "Page 2 of Cyclux" },
                { image: require("@/assets/comics/cyclux/cyclux-spread3.webp"), altText: "Page 3 of Cyclux" },
                { image: require("@/assets/comics/cyclux/cyclux-spread4.webp"), altText: "Page 4 of Cyclux" },
                { image: require("@/assets/comics/cyclux/cyclux-spread5.webp"), altText: "Page 5 of Cylux" },
                { image: require("@/assets/comics/cyclux/cyclux-spread6.webp"), altText: "Page 6 of Cyclux" },
            ],
            thumbnails: [
                require("@/assets/comics/cyclux//lowRes/cyclux-spread1.webp"),
                require("@/assets/comics/cyclux//lowRes/cyclux-spread2.webp"),
                require("@/assets/comics/cyclux//lowRes/cyclux-spread3.webp"),
                require("@/assets/comics/cyclux//lowRes/cyclux-spread4.webp"),
                require("@/assets/comics/cyclux//lowRes/cyclux-spread5.webp"),
                require("@/assets/comics/cyclux//lowRes/cyclux-spread6.webp"),
            ],
        },
        {
            id: "branches",
            order: 20,
            title: "Branches",
            imageMenuCropped: { image: require("@/assets/menu/cropped/branches.webp"), altText: "Branches comict thumbnail" },
            imageMenuFull: { image: require("@/assets/menu/full/branches.webp"), altText: "Branches comic thumbnail" },
            routerLink: "/branches",
            associatedWork: Works.Branches,
            images: [
                { image: require("@/assets/comics/branches/branches-page1.webp"), altText: "Page 1 of Branches" },
                { image: require("@/assets/comics/branches/branches-page2.webp"), altText: "Page 2 of Branches" },
                { image: require("@/assets/comics/branches/branches-page3.webp"), altText: "Page 3 of Branches" },
                { image: require("@/assets/comics/branches/branches-page4.webp"), altText: "Page 4 of Branches" },
                { image: require("@/assets/comics/branches/branches-page5.webp"), altText: "Page 5 of Branches" },
                { image: require("@/assets/comics/branches/branches-page6.webp"), altText: "Page 6 of Branches" },
                { image: require("@/assets/comics/branches/branches-page7.webp"), altText: "Page 7 of Branches" },
            ],
            thumbnails: [
                require("@/assets/comics/branches/lowRes/branches-page1.webp"),
                require("@/assets/comics/branches/lowRes/branches-page2.webp"),
                require("@/assets/comics/branches/lowRes/branches-page3.webp"),
                require("@/assets/comics/branches/lowRes/branches-page4.webp"),
                require("@/assets/comics/branches/lowRes/branches-page5.webp"),
                require("@/assets/comics/branches/lowRes/branches-page6.webp"),
                require("@/assets/comics/branches/lowRes/branches-page7.webp"),
            ],
        },
        {
            id: "illustrations",
            order: 30,
            title: "Illustrations",
            imageMenuCropped: { image: require("@/assets/menu/cropped/illustrations.webp"), altText: "Illustration thumbnail" },
            imageMenuFull: { image: require("@/assets/menu/full/illustrations.webp"), altText: "Illustration thumbnail" },
            routerLink: "/illustrations",
            associatedWork: Works.Illustrations,
            images: [
                { image: require("@/assets/illustrations/bat-person-1080h.webp"), altText: "Illustration of person holding bat" },
                { image: require("@/assets/illustrations/breaking-bad-1500h.webp"), altText: "Illustration of face and two people" },
                { image: require("@/assets/illustrations/can-you-hear-me-1800h.webp"), altText: "Illustration of face" },
                { image: require("@/assets/illustrations/fried-1381h.webp"), altText: "Illustration of man" },
                { image: require("@/assets/illustrations/man-rock-900h.webp"), altText: "Illustration of man and rock" },
                { image: require("@/assets/illustrations/woman-cursive-900h.webp"), altText: "Illustration of woman" },
                { image: require("@/assets/illustrations/yellow-vision-1800h.webp"), altText: "Illustration of man" },
            ],
            thumbnails: [
                require("@/assets/illustrations/lowRes/bat-person-375w.webp"),
                require("@/assets/illustrations/lowRes/breaking-bad-375w.webp"),
                require("@/assets/illustrations/lowRes/can-you-hear-me-375w.webp"),
                require("@/assets/illustrations/lowRes/fried-375w.webp"),
                require("@/assets/illustrations/lowRes/man-rock-375w.webp"),
                require("@/assets/illustrations/lowRes/woman-cursive-375w.webp"),
                require("@/assets/illustrations/lowRes/yellow-vision-375w.webp"),
            ],
        },
        {
            id: "animations",
            order: 40,
            title: "Animations",
            imageMenuCropped: { image: require("@/assets/menu/cropped/animation.webp"), altText: "Animation thumbnail" },
            imageMenuFull: { image: require("@/assets/menu/full/animations.webp"), altText: "Animation thumbnail" },
            routerLink: "/animations",
            associatedWork: Works.Animations,
            images: [],
            thumbnails: [
                require("@/assets/animations/lowRes/feeling-something.webp"),
                require("@/assets/animations/lowRes/ice-cream.webp"),
                require("@/assets/animations/lowRes/walking.webp"),
            ],
            customWorkHtml: [
                `<div style="padding:56.25% 0 0 0;position:relative;width:100%;"><iframe src="https://player.vimeo.com/video/316146671?h=9f5b214711&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="have you ever waken up?"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`,
                `<div style="padding:56.25% 0 0 0;position:relative;width:100%;"><iframe src="https://player.vimeo.com/video/316146770?h=41bf58d934&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="walking"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`,
                `<div style="padding:56.25% 0 0 0;position:relative;width:100%;"><iframe src="https://player.vimeo.com/video/316146757?h=84d1b63bdc&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="i&amp;#039;m starting to feel something."></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`,
            ],
        },
        {
            id: "virtualFixtures",
            order: 50,
            title: "Virtual fixtures",
            imageMenuCropped: { image: require("@/assets/menu/cropped/virtual-fixtures.webp"), altText: "Virtual fixtures thumbnail" },
            imageMenuFull: { image: require("@/assets/menu/full/virtual-fixtures.webp"), altText: "Virtual fixtures thumbnail" },
            routerLink: "/virtualFixtures",
            associatedWork: Works.VirtualFixtures,
            images: [
                { image: require("@/assets/virtual-fixtures/game-hud.gif"), altText: "Animation of game HUD" },
                { image: require("@/assets/virtual-fixtures/game-ray-casting.gif"), altText: "Animation of ray casting" },
                { image: require("@/assets/virtual-fixtures/game-switch-worlds.gif"), altText: "Animation of switching worlds" },
            ],
            thumbnails: [
                require("@/assets/virtual-fixtures/lowRes/game-hud.webp"),
                require("@/assets/virtual-fixtures/lowRes/game-ray-casting.webp"),
                require("@/assets/virtual-fixtures/lowRes/game-switch-worlds.webp"),
            ],
        },
        {
            id: "lineCollection",
            order: 60,
            title: "Line collection",
            imageMenuCropped: { image: require("@/assets/menu/cropped/line-collection.webp"), altText: "Line collection thumbnail" },
            imageMenuFull: { image: require("@/assets/menu/full/line-collection.webp"), altText: "Line collection thumbnail" },
            routerLink: "/lineCollection",
            associatedWork: Works.LineCollection,
            images: [
                { image: require("@/assets/line-collection/arrange-circles-compressed.gif"), altText: "Animation of arranging circles" },
                { image: require("@/assets/line-collection/watch-circles-compressed.gif"), altText: "Animation of circles arranging" },
                { image: require("@/assets/line-collection/watch-squares-compressed.gif"), altText: "Animation of squares arranging" },
                { image: require("@/assets/line-collection/watch-triangles-compressed.gif"), altText: "Animation of triangles arranging" },
            ],
            thumbnails: [
                require("@/assets/line-collection/lowRes/arrange-circles-compressed.webp"),
                require("@/assets/line-collection/lowRes/watch-circles-compressed.webp"),
                require("@/assets/line-collection/lowRes/watch-squares-compressed.webp"),
                require("@/assets/line-collection/lowRes/watch-triangles-compressed.webp"),
            ],
        },
        {
            id: "photography",
            order: 70,
            title: "Photography",
            imageMenuCropped: { image: require("@/assets/menu/cropped/photo.webp"), altText: "Photography thumbnail" },
            imageMenuFull: { image: require("@/assets/menu/full/photography.webp"), altText: "Photography thumbnail" },
            routerLink: "/photography",
            associatedWork: Works.Photography,
            images: [
                { image: require("@/assets/photographs/brittany-driving-1000h.webp"), altText: "Woman driving" },
                { image: require("@/assets/photographs/dad-grandpa-1000h.webp"), altText: "Two men sitting" },
                { image: require("@/assets/photographs/grandma-chandelier-1000h.webp"), altText: "Woman at table" },
                { image: require("@/assets/photographs/grandparents-window-1000h.webp"), altText: "Two people through window" },
                { image: require("@/assets/photographs/grapevine-1000h.webp"), altText: "Driving on a highway" },
                { image: require("@/assets/photographs/laguna-algea-1000h.webp"), altText: "Rock under water" },
                { image: require("@/assets/photographs/laguna-ripples-1000h.webp"), altText: "Rock under water" },
                { image: require("@/assets/photographs/me-bathroom-1000h.webp"), altText: "Self portait in bathroom" },
                { image: require("@/assets/photographs/megan-dad-2-1000h.webp"), altText: "Two people sitting at a table" },
                { image: require("@/assets/photographs/slit-scanning-1-1000h.webp"), altText: "Self portait using slit scanning" },
                { image: require("@/assets/photographs/slit-scanning-2-1000h.webp"), altText: "Self portait using slit scanning" },
            ],
            thumbnails: [
                require("@/assets/photographs/lowRes/brittany-driving.webp"),
                require("@/assets/photographs/lowRes/dad-grandpa.webp"),
                require("@/assets/photographs/lowRes/grandma-chandelier.webp"),
                require("@/assets/photographs/lowRes/grandparents-window.webp"),
                require("@/assets/photographs/lowRes/grapevine.webp"),
                require("@/assets/photographs/lowRes/laguna-algea.webp"),
                require("@/assets/photographs/lowRes/laguna-ripples.webp"),
                require("@/assets/photographs/lowRes/me-bathroom.webp"),
                require("@/assets/photographs/lowRes/megan-dad-2.webp"),
                require("@/assets/photographs/lowRes/slit-scanning-1.webp"),
                require("@/assets/photographs/lowRes/slit-scanning-2.webp"),
            ],
        },
        {
            id: "creativeCoding",
            order: 80,
            title: "Creative coding",
            imageMenuCropped: { image: require("@/assets/menu/cropped/processing-sketches.webp"), altText: "Processing sketches thumbnail" },
            imageMenuFull: { image: require("@/assets/menu/full/creative-coding.webp"), altText: "Processing sketches thumbnail" },
            routerLink: "/creativeCoding",
            associatedWork: Works.CreativeCoding,
            images: [
                { image: require("@/assets/processing-sketches/examples/bobbing-ocean-compressed.gif"), altText: "Processing sketch" },
                { image: require("@/assets/processing-sketches/examples/clicked-fireworks-compressed.gif"), altText: "Processing sketch" },
                { image: require("@/assets/processing-sketches/examples/collage-compressed.gif"), altText: "Processing sketch" },
                { image: require("@/assets/processing-sketches/examples/criss-cross-compressed.gif"), altText: "Processing sketch" },
                { image: require("@/assets/processing-sketches/examples/exploding-balls-compressed.gif"), altText: "Processing sketch" },
                { image: require("@/assets/processing-sketches/examples/game-of-life-compressed.gif"), altText: "Processing sketch" },
                { image: require("@/assets/processing-sketches/examples/ghost-webcam-compressed.gif"), altText: "Processing sketch" },
                { image: require("@/assets/processing-sketches/examples/make-shape-compressed.gif"), altText: "Processing sketch" },
                { image: require("@/assets/processing-sketches/examples/pointillism-compressed.gif"), altText: "Processing sketch" },
                { image: require("@/assets/processing-sketches/examples/random-chords-compressed.gif"), altText: "Processing sketch" },
                { image: require("@/assets/processing-sketches/examples/row-column-suns-compressed.gif"), altText: "Processing sketch" },
                { image: require("@/assets/processing-sketches/examples/row-suns-compressed.gif"), altText: "Processing sketch" },
                { image: require("@/assets/processing-sketches/examples/suns-colliding-compressed.gif"), altText: "Processing sketch" },
            ],
            thumbnails: [
                require("@/assets/processing-sketches/lowRes/bobbing-ocean.webp"),
                require("@/assets/processing-sketches/lowRes/clicked-fireworks.webp"),
                require("@/assets/processing-sketches/lowRes/collage.webp"),
                require("@/assets/processing-sketches/lowRes/criss-cross.webp"),
                require("@/assets/processing-sketches/lowRes/exploding-balls.webp"),
                require("@/assets/processing-sketches/lowRes/game-of-life.webp"),
                require("@/assets/processing-sketches/lowRes/ghost-webcam.webp"),
                require("@/assets/processing-sketches/lowRes/make-shape.webp"),
                require("@/assets/processing-sketches/lowRes/pointillism.webp"),
                require("@/assets/processing-sketches/lowRes/random-chords.webp"),
                require("@/assets/processing-sketches/lowRes/row-column-suns.webp"),
                require("@/assets/processing-sketches/lowRes/row-suns.webp"),
                require("@/assets/processing-sketches/lowRes/suns-colliding.webp"),
            ],
        },
    ];
}

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
    videos: string[],
    customWorkHtml?: string[];
}

export interface WorkImage {
    image: string,
    altText: string
}

export const workConfigurations: WorkConfig[] = [
    {
        id: "cyclux",
        order: 10,
        title: "Cyclux",
        imageMenuCropped: { image: "/assets/menu/cropped/cyclux.webp", altText: "Cyclux comic thumbnail" },
        imageMenuFull: { image: "/assets/menu/full/cyclux.webp", altText: "Cyclux comic thumbnail" },
        routerLink: "/cyclux",
        associatedWork: Works.Cyclux,
        images: [
            { image: "/assets/comics/cyclux/cyclux-spread1.webp", altText: "Page 1 of Cylclux" },
            { image: "/assets/comics/cyclux/cyclux-spread2.webp", altText: "Page 2 of Cyclux" },
            { image: "/assets/comics/cyclux/cyclux-spread3.webp", altText: "Page 3 of Cyclux" },
            { image: "/assets/comics/cyclux/cyclux-spread4.webp", altText: "Page 4 of Cyclux" },
            { image: "/assets/comics/cyclux/cyclux-spread5.webp", altText: "Page 5 of Cylux" },
            { image: "/assets/comics/cyclux/cyclux-spread6.webp", altText: "Page 6 of Cyclux" },
        ],
        videos: [],
    },
    {
        id: "branches",
        order: 20,
        title: "Branches",
        imageMenuCropped: { image: "/assets/menu/cropped/branches.webp", altText: "Branches comic thumbnail" },
        imageMenuFull: { image: "/assets/menu/full/branches.webp", altText: "Branches comic thumbnail" },
        routerLink: "/branches",
        associatedWork: Works.Branches,
        images: [
            { image: "/assets/comics/branches/branches-page1.webp", altText: "Page 1 of Branches" },
            { image: "/assets/comics/branches/branches-page2.webp", altText: "Page 2 of Branches" },
            { image: "/assets/comics/branches/branches-page3.webp", altText: "Page 3 of Branches" },
            { image: "/assets/comics/branches/branches-page4.webp", altText: "Page 4 of Branches" },
            { image: "/assets/comics/branches/branches-page5.webp", altText: "Page 5 of Branches" },
            { image: "/assets/comics/branches/branches-page6.webp", altText: "Page 6 of Branches" },
            { image: "/assets/comics/branches/branches-page7.webp", altText: "Page 7 of Branches" },
        ],
        videos: [],
    },
    {
        id: "illustrations",
        order: 30,
        title: "Illustrations",
        imageMenuCropped: { image: "/assets/menu/cropped/illustrations.webp", altText: "Illustration thumbnail" },
        imageMenuFull: { image: "/assets/menu/full/illustrations.webp", altText: "Illustration thumbnail" },
        routerLink: "/illustrations",
        associatedWork: Works.Illustrations,
        images: [
            { image: "/assets/illustrations/bat-person-1080h.webp", altText: "Illustration of person holding bat" },
            { image: "/assets/illustrations/breaking-bad-1500h.webp", altText: "Illustration of face and two people" },
            { image: "/assets/illustrations/can-you-hear-me-1800h.webp", altText: "Illustration of face" },
            { image: "/assets/illustrations/fried-1381h.webp", altText: "Illustration of man" },
            { image: "/assets/illustrations/man-rock-900h.webp", altText: "Illustration of man and rock" },
            { image: "/assets/illustrations/woman-cursive-900h.webp", altText: "Illustration of woman" },
            { image: "/assets/illustrations/yellow-vision-1800h.webp", altText: "Illustration of man" },
        ],
        videos: [],
    },
    {
        id: "animations",
        order: 40,
        title: "Animations",
        imageMenuCropped: { image: "/assets/menu/cropped/animation.webp", altText: "Animation thumbnail" },
        imageMenuFull: { image: "/assets/menu/full/animations.webp", altText: "Animation thumbnail" },
        routerLink: "/animations",
        associatedWork: Works.Animations,
        images: [],
        videos: [],
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
        imageMenuCropped: { image: "/assets/menu/cropped/virtual-fixtures.webp", altText: "Virtual fixtures thumbnail" },
        imageMenuFull: { image: "/assets/menu/full/virtual-fixtures.webp", altText: "Virtual fixtures thumbnail" },
        routerLink: "/virtualFixtures",
        associatedWork: Works.VirtualFixtures,
        images: [],
        videos: [
            "/assets/virtual-fixtures/game-hud.mp4",
            "/assets/virtual-fixtures/game-ray-casting.mp4",
            "/assets/virtual-fixtures/game-switch-worlds.mp4",
        ],
    },
    {
        id: "lineCollection",
        order: 60,
        title: "Line collection",
        imageMenuCropped: { image: "/assets/menu/cropped/line-collection.webp", altText: "Line collection thumbnail" },
        imageMenuFull: { image: "/assets/menu/full/line-collection.webp", altText: "Line collection thumbnail" },
        routerLink: "/lineCollection",
        associatedWork: Works.LineCollection,
        images: [],
        videos: [
            "/assets/line-collection/arrange-circles-compressed.mp4",
            "/assets/line-collection/watch-circles-compressed.mp4",
            "/assets/line-collection/watch-squares-compressed.mp4",
            "/assets/line-collection/watch-triangles-compressed.mp4",
        ],
    },
    {
        id: "photography",
        order: 70,
        title: "Photography",
        imageMenuCropped: { image: "/assets/menu/cropped/photo.webp", altText: "Photography thumbnail" },
        imageMenuFull: { image: "/assets/menu/full/photography.webp", altText: "Photography thumbnail" },
        routerLink: "/photography",
        associatedWork: Works.Photography,
        images: [
            { image: "/assets/photographs/brittany-driving-1000h.webp", altText: "Woman driving" },
            { image: "/assets/photographs/dad-grandpa-1000h.webp", altText: "Two men sitting" },
            { image: "/assets/photographs/grandma-chandelier-1000h.webp", altText: "Woman at table" },
            { image: "/assets/photographs/grandparents-window-1000h.webp", altText: "Two people through window" },
            { image: "/assets/photographs/grapevine-1000h.webp", altText: "Driving on a highway" },
            { image: "/assets/photographs/laguna-algea-1000h.webp", altText: "Rock under water" },
            { image: "/assets/photographs/laguna-ripples-1000h.webp", altText: "Rock under water" },
            { image: "/assets/photographs/me-bathroom-1000h.webp", altText: "Self portait in bathroom" },
            { image: "/assets/photographs/megan-dad-2-1000h.webp", altText: "Two people sitting at a table" },
            { image: "/assets/photographs/slit-scanning-1-1000h.webp", altText: "Self portait using slit scanning" },
            { image: "/assets/photographs/slit-scanning-2-1000h.webp", altText: "Self portait using slit scanning" },
        ],
        videos: [],
    },
    {
        id: "creativeCoding",
        order: 80,
        title: "Creative coding",
        imageMenuCropped: { image: "/assets/menu/cropped/processing-sketches.webp", altText: "Processing sketches thumbnail" },
        imageMenuFull: { image: "/assets/menu/full/creative-coding.webp", altText: "Processing sketches thumbnail" },
        routerLink: "/creativeCoding",
        associatedWork: Works.CreativeCoding,
        images: [],
        videos: [
            "/assets/processing-sketches/examples/bobbing-ocean-compressed.mp4",
            "/assets/processing-sketches/examples/clicked-fireworks-compressed.mp4",
            "/assets/processing-sketches/examples/collage-compressed.mp4",
            "/assets/processing-sketches/examples/criss-cross-compressed.mp4",
            "/assets/processing-sketches/examples/exploding-balls-compressed.mp4",
            "/assets/processing-sketches/examples/game-of-life-compressed.mp4",
            "/assets/processing-sketches/examples/ghost-webcam-compressed.mp4",
            "/assets/processing-sketches/examples/make-shape-compressed.mp4",
            "/assets/processing-sketches/examples/pointillism-compressed.mp4",
            "/assets/processing-sketches/examples/random-chords-compressed.mp4",
            "/assets/processing-sketches/examples/row-column-suns-compressed.mp4",
            "/assets/processing-sketches/examples/row-suns-compressed.mp4",
            "/assets/processing-sketches/examples/suns-colliding-compressed.mp4",
        ],
    },
];

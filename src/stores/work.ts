import { defineStore } from "pinia";

interface WorkState {
    works: WorkConfig[];
}

export interface WorkConfig {
    id: string;
    order: number;
    title: string;
    imageMenuCropped?: WorkImage;
    imageMenuFull?: WorkImage;
    imagesMenu: WorkImage[];
    routerLink: string;
    associatedWork: Work;
    images: WorkImage[];
    videos: string[],
    customWorkHtml?: string[];
}

export interface WorkImage {
    image: string,
    altText: string
}

// These should correspond to the the Vue components under views/workPages.
export enum Work {
    Animations = "Animations",
    Beacon = "Beacon",
    Branches = "Branches",
    CreativeCoding = "CreativeCoding",
    Cyclux = "Cyclux",
    Illustrations = "Illustrations",
    LineCollection = "LineCollection",
    Photography = "Photography",
    VirtualFixtures = "VirtualFixtures",
    None = "None",
}

const workConfigurations: WorkConfig[] = [
    {
        id: "beacon",
        order: 5,
        title: "Beacon",
        imagesMenu: [
            { image: "/assets/beacon/beacon-01.webp", altText: "Image of beacon" },
            { image: "/assets/beacon/beacon-02.webp", altText: "Image of beacon" },
            { image: "/assets/beacon/beacon-03.webp", altText: "Image of beacon" },
            { image: "/assets/beacon/beacon-04.webp", altText: "Image of beacon" },
            { image: "/assets/beacon/beacon-05.webp", altText: "Image of beacon" },
            { image: "/assets/beacon/beacon-06.webp", altText: "Image of beacon" },
            { image: "/assets/beacon/beacon-07.webp", altText: "Image of beacon" },
            { image: "/assets/beacon/beacon-08.webp", altText: "Image of beacon" },
            { image: "/assets/beacon/beacon-09.webp", altText: "Image of beacon" },
            { image: "/assets/beacon/beacon-10.webp", altText: "Image of beacon" },
            { image: "/assets/beacon/beacon-11.webp", altText: "Image of beacon" },
            { image: "/assets/beacon/beacon-12.webp", altText: "Image of beacon" },
            { image: "/assets/beacon/beacon-13.webp", altText: "Image of beacon" },
            { image: "/assets/beacon/beacon-14.webp", altText: "Image of beacon" },
            { image: "/assets/beacon/beacon-15.webp", altText: "Image of beacon" },
            { image: "/assets/beacon/beacon-16.webp", altText: "Image of beacon" },
        ],
        routerLink: "/beacon",
        associatedWork: Work.Beacon,
        images: [
            { image: "/assets/beacon/beacon-01.webp", altText: "Image of beacon" },
            { image: "/assets/beacon/beacon-02.webp", altText: "Image of beacon" },
            { image: "/assets/beacon/beacon-03.webp", altText: "Image of beacon" },
            { image: "/assets/beacon/beacon-04.webp", altText: "Image of beacon" },
            { image: "/assets/beacon/beacon-05.webp", altText: "Image of beacon" },
            { image: "/assets/beacon/beacon-06.webp", altText: "Image of beacon" },
            { image: "/assets/beacon/beacon-07.webp", altText: "Image of beacon" },
            { image: "/assets/beacon/beacon-08.webp", altText: "Image of beacon" },
            { image: "/assets/beacon/beacon-09.webp", altText: "Image of beacon" },
            { image: "/assets/beacon/beacon-10.webp", altText: "Image of beacon" },
            { image: "/assets/beacon/beacon-11.webp", altText: "Image of beacon" },
            { image: "/assets/beacon/beacon-12.webp", altText: "Image of beacon" },
            { image: "/assets/beacon/beacon-13.webp", altText: "Image of beacon" },
            { image: "/assets/beacon/beacon-14.webp", altText: "Image of beacon" },
            { image: "/assets/beacon/beacon-15.webp", altText: "Image of beacon" },
            { image: "/assets/beacon/beacon-16.webp", altText: "Image of beacon" },
        ],
    videos: []
    },
{
    id: "cyclux",
        order: 10,
            title: "Cyclux",
                imageMenuCropped: { image: "/assets/menu/cropped/cyclux.webp", altText: "Cyclux comic thumbnail" },
    imageMenuFull: { image: "/assets/menu/full/cyclux.webp", altText: "Cyclux comic thumbnail" },
    imagesMenu: [
        { image: "/assets/comics/cyclux/cyclux-spread1.webp", altText: "Page 1 of Cylclux" },
        { image: "/assets/comics/cyclux/cyclux-spread2.webp", altText: "Page 2 of Cyclux" },
        { image: "/assets/comics/cyclux/cyclux-spread3.webp", altText: "Page 3 of Cyclux" },
        { image: "/assets/comics/cyclux/cyclux-spread4.webp", altText: "Page 4 of Cyclux" },
        { image: "/assets/comics/cyclux/cyclux-spread5.webp", altText: "Page 5 of Cylux" },
        { image: "/assets/comics/cyclux/cyclux-spread6.webp", altText: "Page 6 of Cyclux" },
    ],
        routerLink: "/cyclux",
            associatedWork: Work.Cyclux,
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
    imagesMenu: [
        { image: "/assets/comics/branches/branches-page1.webp", altText: "Page 1 of Branches" },
        { image: "/assets/comics/branches/branches-page2.webp", altText: "Page 2 of Branches" },
        { image: "/assets/comics/branches/branches-page3.webp", altText: "Page 3 of Branches" },
        { image: "/assets/comics/branches/branches-page4.webp", altText: "Page 4 of Branches" },
        { image: "/assets/comics/branches/branches-page5.webp", altText: "Page 5 of Branches" },
        { image: "/assets/comics/branches/branches-page6.webp", altText: "Page 6 of Branches" },
        { image: "/assets/comics/branches/branches-page7.webp", altText: "Page 7 of Branches" },
    ],
        routerLink: "/branches",
            associatedWork: Work.Branches,
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
    imagesMenu: [
        { image: "/assets/illustrations/bat-person-1080h.webp", altText: "Illustration of person holding bat" },
        { image: "/assets/illustrations/breaking-bad-1500h.webp", altText: "Illustration of face and two people" },
        { image: "/assets/illustrations/can-you-hear-me-1800h.webp", altText: "Illustration of face" },
        { image: "/assets/illustrations/fried-1381h.webp", altText: "Illustration of man" },
        { image: "/assets/illustrations/man-rock-900h.webp", altText: "Illustration of man and rock" },
        { image: "/assets/illustrations/woman-cursive-900h.webp", altText: "Illustration of woman" },
        { image: "/assets/illustrations/yellow-vision-1800h.webp", altText: "Illustration of man" },
    ],
        routerLink: "/illustrations",
            associatedWork: Work.Illustrations,
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
    imagesMenu: [
        { image: "/assets/animations/have-you-ever-waken-up.webp", altText: "Thumbnail of animataion" },
        { image: "/assets/animations/walking.webp", altText: "Thumbnail of animataion" },
        { image: "/assets/animations/starting-to-feel-something.webp", altText: "Thumbnail of animataion" }
    ],
        routerLink: "/animations",
            associatedWork: Work.Animations,
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
    imagesMenu: [
        { image: "/assets/virtual-fixtures/game-hud.webp", altText: "Thumbnail of virtual fixtures game" },
        { image: "/assets/virtual-fixtures/game-ray-casting.webp", altText: "Thumbnail of virtual fixtures game" },
        { image: "/assets/virtual-fixtures/game-switch-worlds.webp", altText: "Thumbnail of virtual fixtures game" }
    ],
        routerLink: "/virtualFixtures",
            associatedWork: Work.VirtualFixtures,
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
    imagesMenu: [
        { image: "/assets/line-collection/arrange-circles.webp", altText: "Thumbnail of line collection" },
        { image: "/assets/line-collection/watch-circles.webp", altText: "Thumbnail of line collection" },
        { image: "/assets/line-collection/watch-squares.webp", altText: "Thumbnail of line collection" },
        { image: "/assets/line-collection/watch-triangles.webp", altText: "Thumbnail of line collection" }
    ],
        routerLink: "/lineCollection",
            associatedWork: Work.LineCollection,
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
    imagesMenu: [
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
        routerLink: "/photography",
            associatedWork: Work.Photography,
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
    imagesMenu: [
        { image: "/assets/processing-sketches/bobbing-ocean.webp", altText: "Thumbnail of processing sketch" },
        { image: "/assets/processing-sketches/clicked-fireworks.webp", altText: "Thumbnail of processing sketch" },
        { image: "/assets/processing-sketches/collage.webp", altText: "Thumbnail of processing sketch" },
        { image: "/assets/processing-sketches/criss-cross.webp", altText: "Thumbnail of processing sketch" },
        { image: "/assets/processing-sketches/exploding-balls.webp", altText: "Thumbnail of processing sketch" },
        { image: "/assets/processing-sketches/game-of-life.webp", altText: "Thumbnail of processing sketch" },
        { image: "/assets/processing-sketches/ghost-webcam.webp", altText: "Thumbnail of processing sketch" },
        { image: "/assets/processing-sketches/make-shape.webp", altText: "Thumbnail of processing sketch" },
        { image: "/assets/processing-sketches/pointillism.webp", altText: "Thumbnail of processing sketch" },
        { image: "/assets/processing-sketches/random-chords.webp", altText: "Thumbnail of processing sketch" },
        { image: "/assets/processing-sketches/row-column-suns.webp", altText: "Thumbnail of processing sketch" },
        { image: "/assets/processing-sketches/row-suns.webp", altText: "Thumbnail of processing sketch" },
        { image: "/assets/processing-sketches/suns-colliding.webp", altText: "Thumbnail of processing sketch" },
    ],
        routerLink: "/creativeCoding",
            associatedWork: Work.CreativeCoding,
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

export const useWorkStore = defineStore("work", {
    state: (): WorkState => ({
        works: workConfigurations,
    }),
    getters: {
        workConfigs(): WorkConfig[] {
            return [...this.works].sort(function (a, b) {
                return a.order - b.order;
            });
        },
        work: (state: WorkState) => {
            return (workId: string) => {
                const work = state.works.find((work) => work.id === workId);
                if (work === undefined) {
                    throw Error(`Work with ID [${workId}] not found.`);
                }
                return work;
            };
        },
    },
});

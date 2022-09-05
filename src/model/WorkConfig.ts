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
    imageMenuCropped: string;
    imageMenuFull: string;
    routerLink: string;
    associatedWork: Works;
    images: string[];
    thumbnails: string[];
    customWorkHtml?: string[];
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
            summary: "",
            imageMenuCropped: require("@/assets/menu/cropped/cyclux.webp"),
            imageMenuFull: require("@/assets/menu/full/cyclux.webp"),
            routerLink: "/cyclux",
            associatedWork: Works.Cyclux,
            images: [
                require("@/assets/comics/cyclux/cyclux-spread1.webp"),
                require("@/assets/comics/cyclux/cyclux-spread2.webp"),
                require("@/assets/comics/cyclux/cyclux-spread3.webp"),
                require("@/assets/comics/cyclux/cyclux-spread4.webp"),
                require("@/assets/comics/cyclux/cyclux-spread5.webp"),
                require("@/assets/comics/cyclux/cyclux-spread6.webp"),
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
            description: "Short-form comic",
            identifier: "2",
            media: "Digital",
            year: "2018",
            summary: "",
            imageMenuCropped: require("@/assets/menu/cropped/branches.webp"),
            imageMenuFull: require("@/assets/menu/full/branches.webp"),
            routerLink: "/branches",
            associatedWork: Works.Branches,
            images: [
                require("@/assets/comics/branches/branches-page1.webp"),
                require("@/assets/comics/branches/branches-page2.webp"),
                require("@/assets/comics/branches/branches-page3.webp"),
                require("@/assets/comics/branches/branches-page4.webp"),
                require("@/assets/comics/branches/branches-page5.webp"),
                require("@/assets/comics/branches/branches-page6.webp"),
                require("@/assets/comics/branches/branches-page7.webp"),
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
            description: "Collection of various illustrations",
            identifier: "3",
            media: "Digital",
            year: "2018-present",
            summary: "",
            imageMenuCropped: require("@/assets/menu/cropped/illustrations.webp"),
            imageMenuFull: require("@/assets/menu/full/illustrations.webp"),
            routerLink: "/illustrations",
            associatedWork: Works.Illustrations,
            images: [
                require("@/assets/illustrations/bat-person-1080h.webp"),
                require("@/assets/illustrations/breaking-bad-1500h.webp"),
                require("@/assets/illustrations/can-you-hear-me-1800h.webp"),
                require("@/assets/illustrations/fried-1381h.webp"),
                require("@/assets/illustrations/man-rock-900h.webp"),
                require("@/assets/illustrations/woman-cursive-900h.webp"),
                require("@/assets/illustrations/yellow-vision-1800h.webp"),
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
            description: "Collection of various animations",
            identifier: "4",
            media: "Digital",
            year: "2018",
            summary: "",
            imageMenuCropped: require("@/assets/menu/cropped/animation.webp"),
            imageMenuFull: require("@/assets/menu/full/animations.webp"),
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
            description: "Video game",
            identifier: "5",
            media: "Software",
            year: "2017",
            summary: `
                <p>
                    Virtual Fixtures is a roguelike cave exploration game developed in Java. The game was inspired by the graphic novel series 
                    <a href="https://en.wikipedia.org/wiki/East_of_West" title="Wikipedia entry for East of West" target="_blank">East of West</a>.
                </p>
                <p>
                    In Virtual Fixtures, you are trapped in a cave with your Buddy -
                    a hovering AI bot which can project the virtual world for you.
                    You need this projection in order to see where hidden energies
                    are. The downside is that when in the virtual world, you cannot
                    see the numreous traps that riddle the cave in the physical
                    world. Therefore, you must switch back and forth between the two
                    worlds - using one world to find the energies, and the other to
                    avoid traps.
                </p>
                <p>
                    When you start the game, you are placed in the middle of a
                    procedurally generated cave system. You can see this below. Note
                    that the HUD displays what your cursor is currently hovering
                    over.
                </p>
                <p>
                    A main feature that I implemented for this game was ray-casting.
                    You can only see parts of the cave that are within your current
                    line of sight (or parts that you have seen in the past). In
                    order to do this, I used 
                    <a href="https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm" title="Wikipedia entry for Bresenham's line algorithm" target="_blank">Bresenham's line algorithm</a>. 
                    This can be seen below.
                </p>
                <p>
                    The main feature of the game is that you can switch between the
                    physical and virtual worlds. In doing this, you can avoid traps
                    while also searching for energies. Another caveat is that when
                    in the virtual world, you can no longer see remembered parts of
                    the cave. You are limited to what is currently in view only.
                </p>
                <p> 
                    If you would like to see a more in-depth explanation of the
                    game, please watch 
                    <a href="https://youtu.be/C-yfkUNuN_M" title="YouTube link to game walkthrough" target="_blank">my video on YouTube</a>.
                </p>
            `,
            imageMenuCropped: require("@/assets/menu/cropped/virtual-fixtures.webp"),
            imageMenuFull: require("@/assets/menu/full/virtual-fixtures.webp"),
            routerLink: "/virtualFixtures",
            associatedWork: Works.VirtualFixtures,
            images: [
                require("@/assets/virtual-fixtures/game-hud.gif"),
                require("@/assets/virtual-fixtures/game-ray-casting.gif"),
                require("@/assets/virtual-fixtures/game-switch-worlds.gif"),
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
            description: "Art tool made entirely of lines",
            identifier: "6",
            media: "Software",
            year: "2018",
            summary: `
                <p>
                    I wanted to make something that only used collections of lines for visuals.
                    Everything within this application (even the text) is simply a 
                    specifically placed line collection.
                </p>
                <p>
                    In the main menu, you can choose to either arrange or watch 3 different 
                    shapes: a circle, a square, and a triangle. While in the arrange portion, 
                    you can use the mouse wheel to make the shape's size different.
                </p>
                <p>
                    The application was made with JavaScript. More specifically, it used the p5.js 
                    library.
                </p>
            `,
            imageMenuCropped: require("@/assets/menu/cropped/line-collection.webp"),
            imageMenuFull: require("@/assets/menu/full/line-collection.webp"),
            routerLink: "/lineCollection",
            associatedWork: Works.LineCollection,
            images: [
                require("@/assets/line-collection/arrange-circles-compressed.gif"),
                require("@/assets/line-collection/watch-circles-compressed.gif"),
                require("@/assets/line-collection/watch-squares-compressed.gif"),
                require("@/assets/line-collection/watch-triangles-compressed.gif"),
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
            description: "Collection of various photographs",
            identifier: "7",
            media: "Digital",
            year: "2016-present",
            summary: "",
            imageMenuCropped: require("@/assets/menu/cropped/photo.webp"),
            imageMenuFull: require("@/assets/menu/full/photography.webp"),
            routerLink: "/photography",
            associatedWork: Works.Photography,
            images: [
                require("@/assets/photographs/brittany-driving-1000h.webp"),
                require("@/assets/photographs/dad-grandpa-1000h.webp"),
                require("@/assets/photographs/grandma-chandelier-1000h.webp"),
                require("@/assets/photographs/grandparents-window-1000h.webp"),
                require("@/assets/photographs/grapevine-1000h.webp"),
                require("@/assets/photographs/laguna-algea-1000h.webp"),
                require("@/assets/photographs/laguna-ripples-1000h.webp"),
                require("@/assets/photographs/me-bathroom-1000h.webp"),
                require("@/assets/photographs/megan-dad-2-1000h.webp"),
                require("@/assets/photographs/slit-scanning-1-1000h.webp"),
                require("@/assets/photographs/slit-scanning-2-1000h.webp"),
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
            description: "Collection of various creative coding sketches",
            identifier: "8",
            media: "Software",
            year: "2018-present",
            summary: "",
            imageMenuCropped: require("@/assets/menu/cropped/processing-sketches.webp"),
            imageMenuFull: require("@/assets/menu/full/creative-coding.webp"),
            routerLink: "/creativeCoding",
            associatedWork: Works.CreativeCoding,
            images: [
                require("@/assets/processing-sketches/examples/bobbing-ocean-compressed.gif"),
                require("@/assets/processing-sketches/examples/clicked-fireworks-compressed.gif"),
                require("@/assets/processing-sketches/examples/collage-compressed.gif"),
                require("@/assets/processing-sketches/examples/criss-cross-compressed.gif"),
                require("@/assets/processing-sketches/examples/exploding-balls-compressed.gif"),
                require("@/assets/processing-sketches/examples/game-of-life-compressed.gif"),
                require("@/assets/processing-sketches/examples/ghost-webcam-compressed.gif"),
                require("@/assets/processing-sketches/examples/make-shape-compressed.gif"),
                require("@/assets/processing-sketches/examples/pointillism-compressed.gif"),
                require("@/assets/processing-sketches/examples/random-chords-compressed.gif"),
                require("@/assets/processing-sketches/examples/row-column-suns-compressed.gif"),
                require("@/assets/processing-sketches/examples/row-suns-compressed.gif"),
                require("@/assets/processing-sketches/examples/suns-colliding-compressed.gif"),
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

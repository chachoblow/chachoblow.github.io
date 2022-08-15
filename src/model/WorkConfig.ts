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
    customWorkHtml?: string;
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
            imageMenuCropped: require("@/assets/menu/cropped/cyclux.png"),
            imageMenuFull: require("@/assets/menu/full/cyclux.png"),
            routerLink: "/cyclux",
            associatedWork: Works.Cyclux,
            images: [
                require("@/assets/comics/cyclux/cyclux-spread1.png"),
                require("@/assets/comics/cyclux/cyclux-spread2.png"),
                require("@/assets/comics/cyclux/cyclux-spread3.png"),
                require("@/assets/comics/cyclux/cyclux-spread4.png"),
                require("@/assets/comics/cyclux/cyclux-spread5.png"),
                require("@/assets/comics/cyclux/cyclux-spread6.png"),
            ],
            thumbnails: [
                require("@/assets/comics/cyclux//lowRes/cyclux-spread1.png"),
                require("@/assets/comics/cyclux//lowRes/cyclux-spread2.png"),
                require("@/assets/comics/cyclux//lowRes/cyclux-spread3.png"),
                require("@/assets/comics/cyclux//lowRes/cyclux-spread4.png"),
                require("@/assets/comics/cyclux//lowRes/cyclux-spread5.png"),
                require("@/assets/comics/cyclux//lowRes/cyclux-spread6.png"),
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
            summary: "",
            imageMenuCropped: require("@/assets/menu/cropped/branches.png"),
            imageMenuFull: require("@/assets/menu/full/branches.png"),
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
            ],
            thumbnails: [
                require("@/assets/comics/branches/lowRes/branches-page1.png"),
                require("@/assets/comics/branches/lowRes/branches-page2.png"),
                require("@/assets/comics/branches/lowRes/branches-page3.png"),
                require("@/assets/comics/branches/lowRes/branches-page4.png"),
                require("@/assets/comics/branches/lowRes/branches-page5.png"),
                require("@/assets/comics/branches/lowRes/branches-page6.png"),
                require("@/assets/comics/branches/lowRes/branches-page7.png"),
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
            summary: "",
            imageMenuCropped: require("@/assets/menu/cropped/illustrations.png"),
            imageMenuFull: require("@/assets/menu/full/illustrations.png"),
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
            ],
            thumbnails: [
                require("@/assets/illustrations/lowRes/bat-person-375w.png"),
                require("@/assets/illustrations/lowRes/breaking-bad-375w.jpg"),
                require("@/assets/illustrations/lowRes/can-you-hear-me-375w.jpg"),
                require("@/assets/illustrations/lowRes/fried-375w.jpg"),
                require("@/assets/illustrations/lowRes/man-rock-375w.png"),
                require("@/assets/illustrations/lowRes/woman-cursive-375w.png"),
                require("@/assets/illustrations/lowRes/yellow-vision-375w.jpg"),
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
            summary: "",
            imageMenuCropped: require("@/assets/menu/cropped/animation.png"),
            imageMenuFull: require("@/assets/menu/full/animations.png"),
            routerLink: "/animations",
            associatedWork: Works.Animations,
            images: [],
            thumbnails: [
                require("@/assets/animations/lowRes/feeling-something.png"),
                require("@/assets/animations/lowRes/ice-cream.png"),
                require("@/assets/animations/lowRes/walking.png"),
            ],
            customWorkHtml: `
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/316146671?h=9f5b214711&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="have you ever waken up?"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                <div style="padding:56.25% 0 0 0;position:relative;margin-top:10px;"><iframe src="https://player.vimeo.com/video/316146770?h=41bf58d934&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="walking"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                <div style="padding:56.25% 0 0 0;position:relative;margin-top:10px;margin-bottom:10px;"><iframe src="https://player.vimeo.com/video/316146757?h=84d1b63bdc&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="i&amp;#039;m starting to feel something."></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
            `,
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
            imageMenuCropped: require("@/assets/menu/cropped/virtual-fixtures.png"),
            imageMenuFull: require("@/assets/menu/full/virtual-fixtures.png"),
            routerLink: "/virtualFixtures",
            associatedWork: Works.VirtualFixtures,
            images: [
                require("@/assets/virtual-fixtures/game-hud.gif"),
                require("@/assets/virtual-fixtures/game-ray-casting.gif"),
                require("@/assets/virtual-fixtures/game-switch-worlds.gif"),
            ],
            thumbnails: [
                require("@/assets/virtual-fixtures/lowRes/game-hud.png"),
                require("@/assets/virtual-fixtures/lowRes/game-ray-casting.png"),
                require("@/assets/virtual-fixtures/lowRes/game-switch-worlds.png"),
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
            imageMenuCropped: require("@/assets/menu/cropped/line-collection.png"),
            imageMenuFull: require("@/assets/menu/full/line-collection.png"),
            routerLink: "/lineCollection",
            associatedWork: Works.LineCollection,
            images: [
                require("@/assets/line-collection/arrange-circles-compressed.gif"),
                require("@/assets/line-collection/watch-circles-compressed.gif"),
                require("@/assets/line-collection/watch-squares-compressed.gif"),
                require("@/assets/line-collection/watch-triangles-compressed.gif"),
            ],
            thumbnails: [
                require("@/assets/line-collection/lowRes/arrange-circles-compressed.png"),
                require("@/assets/line-collection/lowRes/watch-circles-compressed.png"),
                require("@/assets/line-collection/lowRes/watch-squares-compressed.png"),
                require("@/assets/line-collection/lowRes/watch-triangles-compressed.png"),
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
            summary: "",
            imageMenuCropped: require("@/assets/menu/cropped/photo.png"),
            imageMenuFull: require("@/assets/menu/full/photography.jpg"),
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
            ],
            thumbnails: [
                require("@/assets/photographs/lowRes/brittany-driving.jpg"),
                require("@/assets/photographs/lowRes/dad-grandpa.jpg"),
                require("@/assets/photographs/lowRes/grandma-chandelier.jpg"),
                require("@/assets/photographs/lowRes/grandparents-window.jpg"),
                require("@/assets/photographs/lowRes/grapevine.jpg"),
                require("@/assets/photographs/lowRes/laguna-algea.jpg"),
                require("@/assets/photographs/lowRes/laguna-ripples.jpg"),
                require("@/assets/photographs/lowRes/me-bathroom.jpg"),
                require("@/assets/photographs/lowRes/megan-dad-2.jpg"),
                require("@/assets/photographs/lowRes/slit-scanning-1.jpg"),
                require("@/assets/photographs/lowRes/slit-scanning-2.jpg"),
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
            imageMenuCropped: require("@/assets/menu/cropped/processing-sketches.png"),
            imageMenuFull: require("@/assets/menu/full/creative-coding.jpg"),
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
                require("@/assets/processing-sketches/lowRes/bobbing-ocean.jpg"),
                require("@/assets/processing-sketches/lowRes/clicked-fireworks.jpg"),
                require("@/assets/processing-sketches/lowRes/collage.jpg"),
                require("@/assets/processing-sketches/lowRes/criss-cross.jpg"),
                require("@/assets/processing-sketches/lowRes/exploding-balls.jpg"),
                require("@/assets/processing-sketches/lowRes/game-of-life.jpg"),
                require("@/assets/processing-sketches/lowRes/ghost-webcam.jpg"),
                require("@/assets/processing-sketches/lowRes/make-shape.jpg"),
                require("@/assets/processing-sketches/lowRes/pointillism.jpg"),
                require("@/assets/processing-sketches/lowRes/random-chords.jpg"),
                require("@/assets/processing-sketches/lowRes/row-column-suns.jpg"),
                require("@/assets/processing-sketches/lowRes/row-suns.jpg"),
                require("@/assets/processing-sketches/lowRes/suns-colliding.jpg"),
            ]
        },
    ];
}

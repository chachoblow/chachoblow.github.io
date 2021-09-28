module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "@/scss/globals.scss";',
            },
        },
    },
};

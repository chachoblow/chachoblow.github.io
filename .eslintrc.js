module.exports = {
    root: true,
    env: {
        es2021: true,
    },
    extends: [
        "plugin:vue/vue3-recommended",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "@vue/prettier",
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
};

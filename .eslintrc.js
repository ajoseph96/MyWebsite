module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
        project: "./tsconfig.json",
    },
    plugins: ["@typescript-eslint", "prettier"],
    settings: {
        react: {
            version: "detect",
        },
    },
    root: true,
    extends: [
        "eslint:recommended",
        "plugin: @typescript-eslint/eslint-recommended",
        "plugin: @typescript-eslint/recommended",
        "plugin: @typescript-eslint/recommended-requiring-type-checking",
        "plugin: react-hooks/recommended",
        "plugin: react/recommended",
        "prettier",
    ],
    rules: {
        "react/react-in-jsx-scope": 0,
        "@typescript-eslint/no-unsafe-assignment": 2,
        "@typescript-eslint/no-unsafe-member-access": 2,
        "@typescript-eslint/no-unsafe-call": 2,
        "@typescript-eslint/no-unsafe-argument": 2,
        "@typescript-eslint/no-unsafe-return": 2,
        "no-console": 1,
    },
};

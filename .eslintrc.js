module.exports = {
  extends: ["plugin:@typescript-eslint/recommended", "prettier"],
  plugins: [
    "react-hooks",
    "react",
    "@typescript-eslint",
    "import",
    "prefer-arrow",
    "sort-destructure-keys",
  ],
  ignorePatterns: ["supabase.generated.ts"],
  rules: {
    "no-plusplus": "off",
    "import/no-default-export": "error",
    "import/order": [
      "error",
      {
        groups: [
          "external",
          "builtin",
          "internal",
          "sibling",
          "parent",
          "index",
          "type",
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "error",
    "arrow-body-style": ["warn", "as-needed"],
    "no-console": "error",
    "no-param-reassign": ["error", { props: false }],
    "padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "*", next: ["return", "throw"] },
      { blankLine: "always", prev: "*", next: ["block-like", "class"] },
      { blankLine: "always", prev: ["block-like", "class"], next: "*" },
      { blankLine: "any", prev: "*", next: ["case", "default"] },
      { blankLine: "always", prev: ["var", "let", "const"], next: "*" },
      {
        blankLine: "any",
        prev: ["var", "let", "const"],
        next: ["var", "let", "const"],
      },
    ],
    "prefer-arrow/prefer-arrow-functions": [
      "warn",
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: false,
      },
    ],
    "@typescript-eslint/member-ordering": [
      "error",
      { default: { order: "alphabetically" } },
    ],
    "sort-destructure-keys/sort-destructure-keys": ["error"],
  },
};

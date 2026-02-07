import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import storybook from "eslint-plugin-storybook";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import jest from "eslint-plugin-jest";
import testingLibrary from "eslint-plugin-testing-library";
import jestDom from "eslint-plugin-jest-dom";
import { defineConfig, globalIgnores } from "eslint/config";
import prettier from "eslint-config-prettier";

export default defineConfig([
  globalIgnores(["dist"]),

  /* ===============================
     APPLICATION FILES
  =============================== */
  {
    files: ["**/*.{ts,tsx}"],

    plugins: {
      import: importPlugin,
    },

    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      prettier,
    ],

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: "./tsconfig.eslint.json",
      },
    },

    rules: {
      "no-console": ["error", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": "error",
      "no-implicit-coercion": "error",
      "eqeqeq": ["error", "always"],
      "curly": ["error", "all"],
      "consistent-return": "error",

      
      "semi": ["error", "always"],
      "quotes": ["error", "single", { avoidEscape: true }],
     /* ===============================
        🔚 Trailing Commas
      =============================== */
      "comma-dangle": [
        "error",
        {
          arrays: "always-multiline",
          objects: "always-multiline",
          imports: "always-multiline",
          exports: "always-multiline",
          functions: "always-multiline",
        },
      ],

      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "space-before-function-paren": [
        "error",
        {
          anonymous: "never",
          named: "never",
          asyncArrow: "always",
        },
      ],
      "max-len": [
        "error",
        {
          code: 100,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      "no-multiple-empty-lines": [
        "error",
        {
          max: 1,
          maxEOF: 0,
          maxBOF: 0,
        },
      ],

      "sort-imports": "off",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      /* ===============================
        🧱 Blank Lines / Readability
      =============================== */
      "padding-line-between-statements": [
        "error",

        // blank line before if
        { blankLine: "always", prev: "*", next: "if" },

        // blank line after if block
        { blankLine: "always", prev: "if", next: "*" },

        // blank line before return
        { blankLine: "always", prev: "*", next: "return" },

        // after variable declarations
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" },

        // no blank line between consecutive vars
        {
          blankLine: "any",
          prev: ["const", "let", "var"],
          next: ["const", "let", "var"]
        }
      ],

      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-ignore": "allow-with-description",
        },
      ],

      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",

      "react-refresh/only-export-components": [
        "error",
        { allowConstantExport: true },
      ],
    },
  },

  /* ===============================
     TEST FILES ONLY
  =============================== */
  {
    files: ["**/*.test.{ts,tsx}"],

    extends: [
      jest.configs["flat/recommended"],
      testingLibrary.configs["flat/react"],
      jestDom.configs["flat/recommended"],
    ],
  },

  ...storybook.configs["flat/recommended"],
]);


// // For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
// import storybook from "eslint-plugin-storybook";

// import js from '@eslint/js'
// import globals from 'globals'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'
// import tseslint from 'typescript-eslint'
// import { defineConfig, globalIgnores } from 'eslint/config'

// export default defineConfig([globalIgnores(['dist']), {
//   files: ['**/*.{ts,tsx}'],
//   extends: [
//     js.configs.recommended,
//     tseslint.configs.recommended,
//     reactHooks.configs.flat.recommended,
//     reactRefresh.configs.vite,
//   ],
//   languageOptions: {
//     ecmaVersion: 2020,
//     globals: globals.browser,
//   },
// }, ...storybook.configs["flat/recommended"]])

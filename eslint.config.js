// @ts-check

import eslint from "@eslint/js";
import { configs as litConfigs } from "eslint-plugin-lit";
import prettier from "eslint-plugin-prettier/recommended";
import simpleSortImportPlugin from "eslint-plugin-simple-import-sort";
import { configs as wcConfigs } from "eslint-plugin-wc";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config([
  {
    files: ["src/**/*.ts"],
    languageOptions: { globals: globals.browser },
  },
  {
    ignores: ["dist/**/*"],
  },
  eslint.configs.recommended,
  tseslint.configs.strict,
  wcConfigs["flat/best-practice"],
  litConfigs["flat/all"],
  {
    plugins: {
      "simple-import-sort": simpleSortImportPlugin,
    },
    rules: {
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
    },
  },
  prettier,
]);

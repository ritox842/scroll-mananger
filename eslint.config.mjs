import { defineConfig } from "eslint/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([
    {
        files: ["**/*.ts"],
        extends: [
            ...compat.extends("plugin:@angular-eslint/recommended"),
            ...compat.extends("plugin:@angular-eslint/template/process-inline-templates")
        ],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            parserOptions: {
                project: ["./tsconfig.json"],
                tsconfigRootDir: __dirname
            }
        },
        rules: {
            "no-debugger": "error",
            "@angular-eslint/directive-selector": [
                "error",
                {
                    type: "attribute",
                    prefix: ["app", "rtx"],
                    style: "camelCase"
                }
            ],
            "@angular-eslint/component-selector": [
                "error",
                {
                    type: "element",
                    prefix: ["app", "rtx"],
                    style: "kebab-case"
                }
            ]
        }
    }
]);
import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.config({
    extends: ["next", "prettier"],
  }),
  {
    rules: {
      "no-unused-vars": "warn", // 기본 JS 규칙 활성화
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];

export default eslintConfig;

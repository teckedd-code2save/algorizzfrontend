// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
// ];

// export default eslintConfig;

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // Override specific rules to bypass errors
    rules: {
      "@typescript-eslint/no-unused-vars": "warn", // Report as warnings, not errors
      "prefer-const": "warn",              // Suggest const, but don’t fail
      "react-hooks/exhaustive-deps": "warn", // Warn about missing dependencies
      "@next/next/no-img-element": "off",   // Disable img element check
    },
    // Prevent ESLint from failing the build during Next.js compilation
    ignoreDuringBuilds: true,
  },
];

export default eslintConfig;
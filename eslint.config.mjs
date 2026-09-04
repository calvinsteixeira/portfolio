import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ['app/**/*.tsx', 'components/**/*.tsx'],
    ignores: ['**/*.test.tsx'],
    rules: {
      'react/jsx-no-literals': ['error', { noStrings: true, ignoreProps: true }],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'JSXAttribute[name.name=/^(aria-label|placeholder|title|alt)$/] > Literal[value!=""]',
          message: 'Centralize textos acessíveis e de interface em content/ ou receba-os via props.',
        },
        {
          selector: 'Literal[value=/\\[/]',
          message: 'Use tokens e classes do design system em vez de valores arbitrários.',
        },
        {
          selector: 'Literal[value=/#([0-9a-fA-F]{3,8})\\b/]',
          message: 'Use tokens semânticos em vez de cores literais.',
        },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;

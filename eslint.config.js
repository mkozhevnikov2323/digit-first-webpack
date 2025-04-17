import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import filenames from 'eslint-plugin-filenames';
import prettierPlugin from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** 
  @type {import("eslint").Linter.Config[]}
*/
export default [
  {
    ignores: ['node_modules/', 'build/', 'dist/'],
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        module: 'readonly',
        NodeJS: true,
        require: 'readonly',
        fetch: 'readonly',
        SVGSVGElement: 'readonly',
        localStorage: 'readonly',
      },
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.base.json', './nextjs/tsconfig.json'],
        tsconfigRootDir: __dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      prettier: prettierPlugin,
      '@typescript-eslint': typescript,
      'simple-import-sort': simpleImportSort,
      filenames,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...typescript.configs.recommended.rules,
      ...prettierPlugin.configs.recommended.rules,

      'prettier/prettier': 'error',
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'import/prefer-default-export': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'react/jsx-filename-extension': [
        'warn',
        { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      ],
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/no-explicit-any': ['off'],
    },
  },
  js.configs.recommended,
  prettierConfig,
];

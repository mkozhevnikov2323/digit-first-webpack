/* eslint-disable @typescript-eslint/naming-convention */
import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import filenames from 'eslint-plugin-filenames';
import prettierPlugin from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

/** 
  @type {import("eslint").Linter.Config[]}
*/
export default [
  {
    ignores: ['node_modules/', 'build/'],
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
        NodeJS: true,
      },
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
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
        { extensions: ['.js', '.jsx', '.tsx'] },
      ],
      'react/prop-types': 'off',

      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'default',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
          filter: {
            regex: '^@',
            match: false,
          },
        },
        {
          selector: 'variableLike',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },
        { selector: 'typeLike', format: ['PascalCase'] },
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            regex: '^I[A-Z]',
            match: false,
          },
        },
      ],
    },
  },
  js.configs.recommended,
  prettierConfig,
];

/* eslint-enable @typescript-eslint/naming-convention */

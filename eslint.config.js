import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import storybook from 'eslint-plugin-storybook';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
  // Base configuration for all files
  js.configs.recommended,

  // TypeScript files
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['vite.config.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        project: true,
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.jest,
        JSX: 'readonly',
        DocumentEventMap: true,
        EventListener: true,
        VoidFunction: 'readonly',
        vi: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      react,
      'react-hooks': reactHooks,
      import: importPlugin,
      storybook,
    },
    rules: {
      ...typescriptEslint.configs['recommended-type-checked'].rules,
      ...typescriptEslint.configs['stylistic-type-checked'].rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...storybook.configs.recommended.rules,
      ...prettier.rules,

      // Custom rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'import/no-extraneous-dependencies': 'off',
      'react/jsx-filename-extension': 'off',
      'import/no-unresolved': 'error',
      'import/extensions': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/require-default-props': 'off',
      'no-use-before-define': 'off',
      'no-shadow': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'react/prop-types': 'off',
      'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
      'react/function-component-definition': [
        'error',
        { namedComponents: 'arrow-function' },
      ],
      '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true }],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/no-misused-promises': 'off',
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        node: {
          moduleDirectory: ['node_modules', 'src'],
        },
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
      react: {
        version: 'detect',
      },
    },
  },

  // Overrides for specific files
  {
    files: ['src/screens/ErrorBoundary/ErrorBoundary.tsx', 'src/test/setup.ts'],
    rules: {
      'no-console': 'off',
      'react/function-component-definition': 'off',
    },
  },
  {
    files: ['src/api/client.ts'],
    rules: {
      'no-param-reassign': 'off',
    },
  },
  {
    files: ['src/constants/common.ts'],
    rules: {
      'import/prefer-default-export': 'off',
    },
  },
  {
    files: ['src/types/i18next.d.ts'],
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
    },
  },
  {
    files: ['src/styles/styled.d.ts'],
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
    },
  },

  // Vite config file (no TypeScript project)
  {
    files: ['vite.config.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        // No project setting for vite.config.ts
      },
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      ...typescriptEslint.configs.recommended.rules,
    },
  },
];

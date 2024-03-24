import prettierConfig from './prettier';
import { EslintConfigStructure } from '../../types/eslint-config-structure.interface';

export default <EslintConfigStructure>{
  root: true,
  overrides: [
    {
      files: ['*.ts'],
      env: {
        browser: true,
        es6: true,
        node: true,
      },
      extends: ['plugin:prettier/recommended'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
      },
      plugins: ['eslint-plugin-unicorn', 'eslint-plugin-jsdoc', 'eslint-plugin-import', 'eslint-plugin-no-null', 'eslint-plugin-prefer-arrow', '@typescript-eslint', 'prettier'],
      rules: {
        'prettier/prettier': ['error', prettierConfig],
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': ['warn', { default: 'generic' }],
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: { delimiter: 'semi', requireLast: true },
            singleline: { delimiter: 'semi', requireLast: false },
          },
        ],
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'variable',
            format: ['camelCase', 'UPPER_CASE'],
          },
          {
            selector: 'enumMember',
            format: ['camelCase', 'UPPER_CASE'],
          },
          {
            selector: 'interface',
            format: ['PascalCase'],
          },
          {
            selector: 'function',
            format: ['camelCase'],
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
        ],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true }],
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/triple-slash-reference': [
          'error',
          {
            path: 'always',
            types: 'prefer-import',
            lib: 'always',
          },
        ],
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        'no-var': 'error',
        'prefer-const': 'error',
      },
    },
  ],
};

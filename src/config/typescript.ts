import eslintConfig from './base/eslint';
import { mergeContentConfigurations } from '../utils/configuration.utils';
import { EslintConfigStructure } from '../types/eslint-config-structure.interface';

const typescriptConfig: EslintConfigStructure = {
  ...eslintConfig,
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/class-method-use-this': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'error',
  },
};

const typescriptEslintConfig = mergeContentConfigurations([eslintConfig, typescriptConfig]);

export default typescriptEslintConfig;

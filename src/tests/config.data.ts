import prettierOptions from '../base/prettier.config';

export const angularConfigMock = {
  extends: [
    'eslint:recommended',
    'plugin:@angular-eslint/recommended',
    'plugin:@angular-eslint/template/process-inline-templates',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@angular-eslint/directive-selector': [
      'error',
      { type: 'attribute', prefix: 'app', style: 'camelCase' }
    ],
    '@angular-eslint/component-selector': [
      'error',
      { type: 'element', prefix: 'app', style: 'kebab-case' }
    ],
    'prettier/prettier': [
      'error',
      prettierOptions
    ],
  },
};

export const nestConfigMock = {
  extends: [
    'eslint:recommended',
    'plugin:@nestjs/eslint-plugin-nest/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@nestjs/eslint-plugin-nest/use-pipe-decorator': 'off',
    'prettier/prettier': [
      'error',
      prettierOptions
    ],
  },
};

export const mergedResultMock = {
  extends: [
    'eslint:recommended',
    'plugin:@angular-eslint/recommended',
    'plugin:@angular-eslint/template/process-inline-templates',
    'plugin:prettier/recommended',
    'plugin:@nestjs/eslint-plugin-nest/recommended'
  ],
  rules: {
    '@angular-eslint/directive-selector': [
      'error',
      { type: 'attribute', prefix: 'app', style: 'camelCase' }
    ],
    '@angular-eslint/component-selector': [
      'error',
      { type: 'element', prefix: 'app', style: 'kebab-case' }
    ],
    '@nestjs/eslint-plugin-nest/use-pipe-decorator': 'off',
    'prettier/prettier': [
      'error',
      prettierOptions
    ],
  },
};
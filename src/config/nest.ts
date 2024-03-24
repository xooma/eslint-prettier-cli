import prettierOptions from './base/prettier';

export default {
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

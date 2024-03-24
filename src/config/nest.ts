import eslintConfig from './base/eslint';

export default {
  ...eslintConfig,
  extends: [
    'eslint:recommended',
    'plugin:@nestjs/eslint-plugin-nest/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@nestjs/eslint-plugin-nest/use-pipe-decorator': 'off',
  },
};

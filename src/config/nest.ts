import eslintConfig from './base/eslint';
import { mergeContentConfigurations } from '../utils/configuration.utils';
import { EslintConfigStructure } from '../types/eslint-config-structure.interface';

const nestConfig: EslintConfigStructure = {
  ...eslintConfig,
  extends: ['eslint:recommended', 'plugin:@nestjs/eslint-plugin-nest/recommended', 'plugin:prettier/recommended'],
  rules: {
    '@nestjs/eslint-plugin-nest/use-pipe-decorator': 'off',
  },
};

const nestEslintConfig = mergeContentConfigurations([eslintConfig, nestConfig]);

export default nestEslintConfig;

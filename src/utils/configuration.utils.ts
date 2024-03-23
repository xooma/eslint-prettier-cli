import { join } from 'path';

interface EslintConfigFile {
  default: {};
}

const getConfiguration = async (configName: string) => await import(join('../config', configName))
  .then((v: EslintConfigFile) => v.default);

const getMultipleConfigurations = (configNames: string[]) =>
  configNames.map((configName) => getConfiguration(configName));

const mergeContentConfigurations = (configs: {}[]) => {
  return {

  }
};

export default { getConfiguration, getMultipleConfigurations, mergeContentConfigurations };

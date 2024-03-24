import { join } from 'path';
import { EslintConfigStructure } from '../types/eslint-config-structure.interface.js';
import { EslintRawConfig } from '../types/eslint-raw-config.interface.js';
import { ProjectConfigType } from '../types/project-config.type.js';

const mergeDeep = (target: any, source: any): any => {
  if (Array.isArray(target) && Array.isArray(source)) {
    return Array.from(new Set([...target, ...source]));
  } else if (typeof target === 'object' && typeof source === 'object') {
    return Object.keys(source).reduce((acc, key) => {
      if (typeof source[key] === 'object' && key in acc) {
        acc[key] = mergeDeep(acc[key], source[key]);
      } else {
        acc[key] = source[key];
      }
      return acc;
    }, target);
  }
  return source;
};

export const getConfiguration = async (configName: ProjectConfigType): Promise<EslintConfigStructure> =>
  import(join('../config', configName)).then((v: EslintRawConfig) => v.default);

export const getMultipleConfigurations = async (configNames: ProjectConfigType[]): Promise<EslintConfigStructure[]> =>
  Promise.all(configNames.map(getConfiguration));

export const mergeContentConfigurations = (configs: EslintConfigStructure[]): EslintConfigStructure =>
  configs.reduce((acc, config) => mergeDeep(acc, config), {});

export const loadConfiguration = async (args: ProjectConfigType[]): Promise<EslintConfigStructure> =>
  getMultipleConfigurations(args).then(mergeContentConfigurations);

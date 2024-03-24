import { join } from 'path';
import { EslintConfigStructure } from '../types/eslint-config-structure.interface';
import { EslintRawConfig } from '../types/eslint-raw-config.interface';
import { ProjectConfigType } from '../types/project-config.type';

function mergeDeep(target: any, source: any | Object): Array<unknown> | Object {
  if (Array.isArray(target) && Array.isArray(source)) {

    return Array.from(new Set([...target, ...source]));
  } else if (typeof target === 'object' && typeof source === 'object') {

    Object.keys(source).forEach(key => {
      if (typeof source[key] === 'object' && key in target) {
        target[key] = mergeDeep(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    });

    return target;
  }

  return source;
}

export async function getConfiguration(configName: string): Promise<EslintConfigStructure> {
  return await import(join('../config', configName)).then((v: EslintRawConfig) => v.default)
}

export async function getMultipleConfigurations(configNames: Array<string>): Promise<Array<EslintConfigStructure>> {
  const confPromises = configNames.map((configName) => getConfiguration(configName));

  return await Promise.all(confPromises);
}

export function mergeContentConfigurations(configs: Array<EslintConfigStructure>): EslintConfigStructure {
  return configs.reduce((acc, config) => mergeDeep(acc, config), {});
}

export async function loadConfiguration(args: Array<ProjectConfigType>): Promise<EslintConfigStructure> {
  return await getMultipleConfigurations(args).then().then((configs) => mergeContentConfigurations(configs));
}
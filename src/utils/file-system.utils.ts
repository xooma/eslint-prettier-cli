import * as fs from 'fs';
import { exec } from 'child_process';

import { EslintConfigStructure } from '../types/eslint-config-structure.interface';

export const createEslintrcFile = (config: EslintConfigStructure) =>
  fs.writeFileSync('.eslintrc', `${JSON.stringify(config, null, 2)}`);

export const installDependencies = (dependencies: Array<string>) => {
  exec(`pnpm i -D ${dependencies.join(' ')}`, (error) => {
    if (error) {
      console.error(`Erreur lors de l'installation des dépendances : ${error}`);

      return;
    }

    console.log(`Dépendances installées avec succès.`);
  });
}

export const extractDependencies = (config: EslintConfigStructure, pluginNames: string[] = []): string[] => {
  if (config.plugins)
    pluginNames.push(...config.plugins);

  if (config.overrides) {
    for (const override of config.overrides) {
      extractDependencies(override, pluginNames);
    }
  }

  return [ ...new Set(pluginNames) ];
};
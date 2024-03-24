import * as fs from 'fs';
import { exec } from 'child_process';

import { EslintConfigStructure } from '../types/eslint-config-structure.interface';

const requiredDependencies = ['eslint-plugin-prettier', 'eslint-config-prettier', '@typescript-eslint/parser'];

export const createEslintrcFile = (config: EslintConfigStructure) => fs.writeFileSync('.eslintrc', `${JSON.stringify(config, null, 2)}`);

export const installDependencies = (dependencies: Array<string>) => {
  exec(`pnpm i -D ${dependencies.join(' ')}`, (error) => {
    if (error) {
      console.error(`Erreur lors de l'installation des dépendances : ${error}`);

      return;
    }

    console.log(`Dépendances installées avec succès.`);
  });
};

export const extractDependencies = (config: EslintConfigStructure, pluginNames: Array<string> = requiredDependencies): Array<string> => {
  if (config.plugins) pluginNames.push(...config.plugins);

  if (config.overrides) {
    for (const override of config.overrides) {
      extractDependencies(override, pluginNames);
    }
  }

  const parsedPluginNames = pluginNames.map((p) => {
    if (p === '@typescript-eslint') {
      p = '@typescript-eslint/eslint-plugin';
    }

    return p;
  });

  return [...new Set(parsedPluginNames)];
};

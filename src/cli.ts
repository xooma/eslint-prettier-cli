import checkbox from '@inquirer/checkbox';
import { Command } from 'commander';
import { ProjectConfigType } from './types/project-config.type.js';
import { loadConfiguration } from './utils/configuration.utils.js';
import { createEslintrcFile, extractDependencies, installDependencies } from './utils/file-system.utils.js';

const questions = [
  {
    type: 'checkbox',
    name: 'pkg-manager',
    message: 'Quel gestionnaire de package utilisez-vous ?',
    required: true,
    choices: [
      { name: 'npm', value: 'npm' },
      { name: 'pnpm', value: 'pnpm' },
      { name: 'yarn', value: 'yarn' }
    ]
  },
  {
    type: 'checkbox',
    name: 'configs',
    message: 'Quelles configurations souhaitez-vous appliquer ?',
    required: true,
    choices: [
      { name: 'Angular', value: 'angular' },
      { name: 'NestJS', value: 'nest' },
      { name: 'TypeScript', value: 'typescript' },
    ],
  }
];

const program = new Command();

const parseConfig = (value: string): Array<ProjectConfigType> => {
  return <Array<ProjectConfigType>>value.split(',');
};

const getConfigInlineCommandValues = (): Array<ProjectConfigType> => {
  program
    .version('0.1.0')
    .option('--config <configs>', 'Spécifie une ou plusieurs configurations, séparées par des virgules', parseConfig)
    .action((options) => {
      console.log('Configurations choisies:', options?.config);
    });

  const result = program.parse(process.argv).getOptionValue('config');

  return result ? parseConfig(result) : result;
};

const askQuestions = async (): Promise<Array<ProjectConfigType>> => {
  return checkbox({ ...questions[1] }, {}).then((answers) => {
    console.log(`Configurations choisies: ${answers}`);
    return <Array<ProjectConfigType>>answers;
  });
};

async function getResults() {
  let resultsFromCmdLine = getConfigInlineCommandValues();

  if (!resultsFromCmdLine) resultsFromCmdLine = await askQuestions();

  return resultsFromCmdLine;
}

export const init = async () => {
  const results = await getResults();
  const configuration = await loadConfiguration(results );

  console.log(configuration)
  const dependencies = extractDependencies(configuration)

  console.log(dependencies)

  createEslintrcFile(configuration);
  installDependencies(dependencies);
};

init();

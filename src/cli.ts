import checkbox from '@inquirer/checkbox';
import { Command } from 'commander';
import prompts from './models/prompts'

export class Cli {
  private readonly program = new Command();
  private readonly questions = prompts;

  constructor() {
    if (!this.getConfigInlineCommandValues()) this.askQuestions();
  }

  private getConfigInlineCommandValues() {
    this.program
      .version('0.1.0')
      .option('--config <configs>', 'Spécifie une ou plusieurs configurations, séparées par des virgules', this.parseConfig)
      .action((options) => {
        console.log('Configurations choisies:', options?.config);
      });

    return this.program.parse(process.argv).getOptionValue('config');
  }

  private async askQuestions() {
    await checkbox({ ...this.questions[0] }, {}).then((answers) => console.log(`Configurations choisies: ${answers}`));
  }

  private parseConfig(value: string): Array<string> {
    return value.split(',');
  }
}
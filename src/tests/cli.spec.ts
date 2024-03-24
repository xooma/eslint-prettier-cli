import checkbox from '@inquirer/checkbox';
import {init} from '../cli';

jest.mock('@inquirer/checkbox');
jest.mock('commander', () => {
  return {
    Command: jest.fn().mockImplementation(() => ({
      version: jest.fn().mockReturnThis(),
      option: jest.fn().mockReturnThis(),
      action: jest.fn().mockImplementation((fn) => {
        fn({ config: 'angular' });
      }),
      parse: jest.fn().mockReturnThis(),
      getOptionValue: jest.fn().mockReturnValue('angular'),
    }))
  }
});
jest.mock('fs', () => ({
  writeFileSync: jest.fn(),
}));

jest.mock('child_process', () => ({
  exec: jest.fn((cmd, callback) => callback(null)),
}));

describe('Cli', () => {
  afterEach(() => jest.resetAllMocks())

  it('should not askQuestions if command line args exist', async () => {
    await init();

    expect(checkbox).not.toHaveBeenCalled();
  })
});
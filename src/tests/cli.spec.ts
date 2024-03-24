import checkbox from '@inquirer/checkbox';
import { init } from '../cli.js';

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

describe('Cli', () => {
  afterEach(() => jest.resetAllMocks())

  it('should not askQuestions if command line args exist', async () => {
    await init();

    expect(checkbox).not.toHaveBeenCalled();
  })
})

// describe('CLI Integration Test', () => {
//   const testDir = join(__dirname, 'testProject');
//   const eslintrcPath = join(testDir, '.eslintrc.js');
//
//   beforeAll(() => {
//     if (!existsSync(testDir)) mkdirSync(testDir);
//   });
//
//   afterAll(() => {
//     if (existsSync(eslintrcPath)) unlinkSync(eslintrcPath);
//     if (existsSync(testDir)) rmdirSync(testDir, { recursive: true }); // Utilisez recursive pour Node.js >= v12.10.0
//   });
//
//   test('CLI applique la configuration Angular et TypeScript', async () => {
//     execSync(`node ../../../dist/cli.js --config angular,typescript`, {
//       cwd: testDir
//     });
//
//     expect(existsSync(eslintrcPath)).toBeTruthy();
//
//     const eslintrcContent = readFileSync(eslintrcPath, 'utf8');
//     expect(eslintrcContent).toMatch(/angular/);
//     expect(eslintrcContent).toMatch(/typescript/);
//   });
// });
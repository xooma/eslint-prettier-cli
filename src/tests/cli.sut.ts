// import checkbox from '@inquirer/checkbox';
// import { Command } from 'commander';
//
// export const cliSut = {
//   configureCheckbox: function(returnValue: any[] = [ 'angular' ]) {
//     (checkbox as jest.Mock).mockImplementation(() => Promise.resolve(returnValue));
//   },
//
//   configureCommand: function(getOptionValue: string | undefined = 'angular', args: { [key: string]: string } = {}) {
//     (Command as jest.Mock).mockImplementation(() => ({
//       version: jest.fn().mockReturnThis(),
//       option: jest.fn().mockReturnThis(),
//       action: jest.fn().mockImplementation((fn) => {
//         fn({ ...args });
//       }),
//       parse: jest.fn().mockReturnThis(),
//       getOptionValue: jest.fn().mockReturnValue(getOptionValue),
//     }));
//   },
//   resetMocks: function() {
//     jest.resetAllMocks();
//   },
// };
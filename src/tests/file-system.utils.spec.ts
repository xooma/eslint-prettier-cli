import { mockConfig } from './file-system.data';
import { extractDependencies } from '../utils/file-system.utils';

describe('fileSystemUtils', () => {
  it('should correctly extract plugin names from eslint config object, including overrides', () => {
    const dependencies: string[] = [
      'eslint-plugin-unicorn',
      'eslint-plugin-jsdoc',
      'eslint-plugin-import',
      'eslint-plugin-no-null',
      'eslint-plugin-prefer-arrow',
      '@typescript-eslint',
      'prettier',
      '@angular-eslint/eslint-plugin',
      '@angular-eslint/eslint-plugin-template',
    ];

    const result = extractDependencies(mockConfig);
    expect(result.sort()).toEqual(dependencies.sort());
  })
});
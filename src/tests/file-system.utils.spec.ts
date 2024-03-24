import { mockConfig } from './file-system.data';
import { extractDependencies } from '../utils/file-system.utils';

describe('fileSystemUtils', () => {
  it('should correctly extract plugin names from eslint config object, including overrides', () => {
    const dependencies: Array<string> = [
      "@angular-eslint/eslint-plugin",
      "@angular-eslint/eslint-plugin-template",
      "@typescript-eslint",
      "eslint-config-prettier",
      "eslint-plugin-import",
      "eslint-plugin-jsdoc",
      "eslint-plugin-no-null",
      "eslint-plugin-prefer-arrow",
      "eslint-plugin-prettier",
      "eslint-plugin-unicorn",
      "prettier"
    ]

    const result = extractDependencies(mockConfig);
    expect(result.sort()).toEqual(dependencies.sort());
  })
});
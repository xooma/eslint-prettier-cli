export const mockConfig = {
  root: true,
  overrides: [
    {
      files: [ '*.ts' ],
      env: {
        browser: true,
        es6: true,
        node: true,
      },
      extends: [ 'plugin:prettier/recommended' ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
      },
      plugins: [
        'eslint-plugin-unicorn',
        'eslint-plugin-jsdoc',
        'eslint-plugin-import',
        'eslint-plugin-no-null',
        'eslint-plugin-prefer-arrow',
        '@typescript-eslint',
        'prettier',
      ],
    },
    {
      files: [ '*.ts' ],
      plugins: [
        '@angular-eslint/eslint-plugin',
        '@angular-eslint/eslint-plugin-template',
      ],
      rules: {
        '@angular-eslint/component-class-suffix': [ 'error', { suffixes: [ 'Composant', 'Component', 'View', 'Page', 'Vue', 'Base' ] } ],
        '@angular-eslint/component-selector': [ 'error', { type: 'element', prefix: 'eic', style: 'kebab-case' } ],
        '@angular-eslint/contextual-lifecycle': 'error',
        '@angular-eslint/directive-class-suffix': [ 'error', { suffixes: [ 'Directive', 'Validator', 'Validateur' ] } ],
        '@angular-eslint/no-host-metadata-property': 'error',
        '@angular-eslint/no-input-rename': 'error',
        '@angular-eslint/no-inputs-metadata-property': 'error',
        '@angular-eslint/no-output-on-prefix': 'error',
        '@angular-eslint/no-output-rename': 'error',
        '@angular-eslint/no-outputs-metadata-property': 'error',
        '@angular-eslint/prefer-output-readonly': 'error',
        '@angular-eslint/use-component-view-encapsulation': 'error',
        '@angular-eslint/use-lifecycle-interface': 'error',
        '@angular-eslint/use-pipe-transform-interface': 'error',
      },
    },
  ],
};
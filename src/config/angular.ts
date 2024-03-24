import eslintConfig from './base/eslint';

export default {
  ...eslintConfig,
  overrides: [
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
    {
      files: [ '*.html' ],
      parser: '@angular-eslint/template-parser',
      parserOptions: {
        project: [ 'tsconfig.json' ],
      },
      extends: [ 'plugin:@angular-eslint/template/recommended' ],
      rules: {
        '@angular-eslint/template/banana-in-box': 'error',
        '@angular-eslint/template/no-negated-async': 'error',
        'max-len': [ 'error', { code: 150 } ],
      },
    },
  ],
};
export interface EslintConfigStructure {
  plugins?: Array<string>;
  overrides?: Array<EslintConfigStructure>;
  [key: string]: any;
}
const { resolvePathFromProjectRoot } = require('../utils/pathResolver.cjs');

const { packageJSONConfigPath } = require('./perFileConfigs/index.cjs');

const projectRootPath = resolvePathFromProjectRoot('./');
const dictionariesDefinitionsConfigPath = './dictionaries/index.cjs';

// As of time of creating this config,
// 'import' option seems to work relative to the config file path
// and no needs to use path.resolve
const cspellConfig = {
  version: '0.2',
  globRoot: projectRootPath,
  language: 'en,ru',
  files: ['src/**'],
  ignorePaths: [
    'dist/',
    'build/',
    'node_modules/',
    'pnpm-lock.yaml',
    'dictionary.txt',
  ],
  import: [dictionariesDefinitionsConfigPath, packageJSONConfigPath],
};

module.exports = cspellConfig;

const {
  resolvePathFromProjectRoot,
} = require('../utils/pathResolver/pathResolver.cjs');

const { cspellIgnorePaths } = require('./cspell.ignore.cjs');

const projectRootPath = resolvePathFromProjectRoot('./');
const dictionariesDefinitionsConfigPath = './dictionaries/index.cjs';
const perFileConfigsPath = './perFileConfigs/index.cjs';

// As of time of creating this config,
// 'import' option seems to work relative to the config file path
// and no needs to use path.resolve
const cspellConfig = {
  globRoot: projectRootPath,
  ignorePaths: cspellIgnorePaths,
  import: [dictionariesDefinitionsConfigPath, perFileConfigsPath],
  language: 'en,ru',
  version: '0.2',
};

module.exports = cspellConfig;

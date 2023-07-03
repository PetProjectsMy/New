const { DICTIONARIES_NAMES } = require('../../dictionaries/dictionariesNames.cjs');

const fileNamesCheckConfig = {
  dictionaries: [DICTIONARIES_NAMES.PACKAGES_NAMES_DICTIONARY],
  import: ['../../dictionaries/packagesNames.dict/definition.cjs'],
  words: ['classnames'],
};

module.exports = fileNamesCheckConfig;

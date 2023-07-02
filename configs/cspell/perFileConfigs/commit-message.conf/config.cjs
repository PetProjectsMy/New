const { DICTIONARIES_NAMES } = require('../../dictionaries/dictionariesNames.cjs');

const commitMessageConfig = {
  dictionaries: [DICTIONARIES_NAMES.PACKAGES_NAMES_DICTIONARY],
  import: ['../../dictionaries/packagesNames.dict/definition.cjs'],
};

module.exports = commitMessageConfig;

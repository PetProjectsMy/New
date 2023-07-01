const {
  createDictionaryDefinition,
} = require('../createDictionaryDefinition.cjs');
const { DICTIONARIES_NAMES } = require('../dictionariesNames.cjs');

const packagesNamesDictionaryDefinition = createDictionaryDefinition(
  DICTIONARIES_NAMES.WEBPACK_CONFIG_DICTIONARY
);

module.exports = packagesNamesDictionaryDefinition;

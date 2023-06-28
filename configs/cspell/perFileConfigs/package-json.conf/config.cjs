const {
  DICTIONARIES_NAMES,
} = require('../../dictionaries/dictionariesNames.cjs');

const packageJSONConfig = {
  overrides: [
    {
      filename: ['**/package.json'],
      dictionaries: [DICTIONARIES_NAMES.PACKAGES_NAMES_DICTIONARY],
    },
  ],
};

module.exports = packageJSONConfig;

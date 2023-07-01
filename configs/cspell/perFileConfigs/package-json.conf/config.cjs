const {
  DICTIONARIES_NAMES,
} = require('../../dictionaries/dictionariesNames.cjs');

const packageJSONConfig = {
  overrides: [
    {
      dictionaries: [DICTIONARIES_NAMES.PACKAGES_NAMES_DICTIONARY],
      filename: ['**/package.json'],
    },
  ],
};

module.exports = packageJSONConfig;

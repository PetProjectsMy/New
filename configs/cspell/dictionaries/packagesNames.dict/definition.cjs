const path = require('path');

const { DICTIONARIES_NAMES } = require('../dictionariesNames.cjs');

const dictionaryPath = path.resolve(__dirname, './dictionary.txt');

const packagesNamesDictionaryConfig = {
  dictionaryDefinitions: [
    {
      name: DICTIONARIES_NAMES.PACKAGES_NAMES_DICTIONARY,
      path: dictionaryPath,
      addWords: true,
    },
  ],
};

module.exports = packagesNamesDictionaryConfig;

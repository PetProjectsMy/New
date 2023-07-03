const { DICTIONARIES_NAMES } = require('../../dictionaries/dictionariesNames.cjs');

const webpackSetupFilesConfig = {
  overrides: [
    {
      dictionaries: [DICTIONARIES_NAMES.WEBPACK_CONFIG_DICTIONARY],
      filename: ['**/configs/webpack/'],
    },
  ],
};

module.exports = webpackSetupFilesConfig;

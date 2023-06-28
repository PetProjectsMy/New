const path = require('path');

const dictionaryPath = path.resolve(__dirname, './dictionary.txt');

const packageJSONDictionaryConfig = {
  overrides: [
    {
      filename: ['**/package.json'],
      dictionaries: ['package-json-dictionary'],
      dictionaryDefinitions: [
        {
          name: 'package-json-dictionary',
          path: dictionaryPath,
          addWords: true,
        },
      ],
    },
  ],
};

module.exports = packageJSONDictionaryConfig;

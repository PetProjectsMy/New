const path = require('path');

const { getFunctionCallerPath } = require('../../utils/functionCallerPath/functionCallerPath.cjs');

/**
 * function is supposed to only be called in the file
 * that is sibling with appropriate 'dictionary.txt'
 * @param {string} dictionaryName
 */
function createDictionaryDefinition(dictionaryName) {
  const functionCallerPath = getFunctionCallerPath();
  if (!functionCallerPath) {
    return {};
  }

  const dictionaryFolderPath = functionCallerPath.callerDirectoryPath;
  const dictionaryPath = path.join(dictionaryFolderPath, 'dictionary.txt');

  const dictionaryDefinitionConfig = {
    dictionaryDefinitions: [
      {
        addWords: true,
        name: dictionaryName,
        path: dictionaryPath,
      },
    ],
  };

  return dictionaryDefinitionConfig;
}

module.exports = { createDictionaryDefinition };

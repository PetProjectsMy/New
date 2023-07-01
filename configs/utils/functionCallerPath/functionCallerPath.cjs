const path = require('path');

function getFunctionCallerPath() {
  const stack = new Error().stack.split('\n');

  let callerFileStackInfoIndex = undefined;
  stack.some((stackRecord, index) => {
    const isNeededIndex = /Object\.<anonymous>/.test(stackRecord);
    if (isNeededIndex) {
      callerFileStackInfoIndex = index;
    }
    return isNeededIndex;
  });

  if (!callerFileStackInfoIndex) {
    return undefined;
  }
  const callerFileInfo = stack[callerFileStackInfoIndex];

  const filePathRegex = /\((?<pathGroup>.*)(?<lineGroup>:\d+:\d+)\)/;
  const filePathRegexMatch = callerFileInfo.match(filePathRegex);
  if (!filePathRegexMatch) {
    return undefined;
  }

  const callerFilePath = filePathRegexMatch.groups['pathGroup'];
  if (!callerFilePath) {
    return undefined;
  }

  const callerDirectoryPath = path.dirname(callerFilePath);

  return {
    callerDirectoryPath,
    callerFilePath,
  };
}

module.exports = { getFunctionCallerPath };

const path = require('path');

function resolvePath(pathString) {
  return path.resolve(__dirname, pathString);
}

const perFileConfigs = {
  packageJSONConfigPath: resolvePath('./package-json.conf/config.cjs'),
};

module.exports = perFileConfigs;

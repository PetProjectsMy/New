const path = require('path');

function resolvePath(pathString) {
  return path.resolve(__dirname, pathString);
}

const packageJSONConfigPath = resolvePath('./package-json.conf/config.cjs');
const webpackSetupFilesConfigPath = resolvePath(
  './webpack-config.conf/config.cjs'
);

const perFileConfigs = {
  import: [packageJSONConfigPath, webpackSetupFilesConfigPath],
};

module.exports = perFileConfigs;

const { importPluginConfig } = require('./importPlugin/importPluginConfig.cjs');
const { noUnusedImportsPluginConfig } = require('./noUnusedImportsPlugin.cjs');
const { objectKeysSortPluginConfig } = require('./objectKeysSortPluginConfig.cjs');
const { exportsSortPluginConfig } = require('./sortExportsPlugin.cjs');
const { utilsConfig } = require('./utilsConfig.cjs');

const pluginsConfigOverride = [
  exportsSortPluginConfig,
  importPluginConfig,
  noUnusedImportsPluginConfig,
  objectKeysSortPluginConfig,
  utilsConfig,
];

module.exports = { pluginsConfigOverride };

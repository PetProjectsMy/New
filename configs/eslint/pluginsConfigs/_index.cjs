const { importPluginConfig } = require('./importPluginConfig.cjs');
const {
  objectKeysSortPluginConfig,
} = require('./objectKeysSortPluginConfig.cjs');
const { utilsConfig } = require('./utilsConfig.cjs');

const pluginsConfigOverride = [
  importPluginConfig,
  objectKeysSortPluginConfig,
  utilsConfig,
];

module.exports = { pluginsConfigOverride };

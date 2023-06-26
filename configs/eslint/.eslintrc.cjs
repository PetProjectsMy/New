const {
  javascriptConfig,
  typescriptConfig,
} = require('./languagesConfigs/index.cjs');

const {
  importPluginConfig,
  utilsConfig,
} = require('./pluginsConfigs/index.cjs');

const eslintConfig = {
  ignorePatterns: ['dist/', 'build/', 'node_modules/'],
  root: true,
  overrides: [
    javascriptConfig,
    typescriptConfig,
    importPluginConfig,
    utilsConfig,
  ],
};

module.exports = eslintConfig;

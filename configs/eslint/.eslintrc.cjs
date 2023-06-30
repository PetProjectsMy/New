const {
  htmlConfig,
  javascriptConfig,
  typescriptConfig,
} = require('./languagesConfigs/index.cjs');
const {
  a11yPluginConfig,
  importPluginConfig,
  utilsConfig,
} = require('./pluginsConfigs/index.cjs');

const eslintConfig = {
  ignorePatterns: ['dist/', 'build/', 'node_modules/'],
  root: true,
  overrides: [
    htmlConfig,
    javascriptConfig,
    typescriptConfig,
    a11yPluginConfig,
    importPluginConfig,
    utilsConfig,
  ],
  rules: {
    'no-console': 'warn',
  },
};

module.exports = eslintConfig;

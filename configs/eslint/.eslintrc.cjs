const { languagesConfigOverride } = require('./languagesConfigs/_index.cjs');
const { pluginsConfigOverride } = require('./pluginsConfigs/_index.cjs');

const eslintConfig = {
  ignorePatterns: ['dist/', 'build/', 'node_modules/'],
  overrides: [...languagesConfigOverride, ...pluginsConfigOverride],
  root: true,

  rules: {
    'no-console': 'warn',
  },
};

module.exports = eslintConfig;

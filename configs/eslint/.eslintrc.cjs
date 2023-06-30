const { languagesConfigOverride } = require('./languagesConfigs/_index.cjs');
const { pluginsConfigOverride } = require('./pluginsConfigs/_index.cjs');

const eslintConfig = {
  ignorePatterns: ['dist/', 'build/', 'node_modules/'],
  root: true,
  overrides: [...languagesConfigOverride, ...pluginsConfigOverride],

  rules: {
    'no-console': 'warn',
  },
};

module.exports = eslintConfig;

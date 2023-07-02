const { languagesConfigOverride } = require('./languagesConfigs/_index.cjs');
const { perFilesConfigsOverride } = require('./perFilesConfigs/index.cjs');
const { pluginsConfigOverride } = require('./pluginsConfigs/_index.cjs');
const { eslintRules } = require('./rules/_index.cjs');

const eslintConfig = {
  ignorePatterns: ['dist/', 'build/', 'node_modules/'],
  overrides: [...languagesConfigOverride, ...pluginsConfigOverride, ...perFilesConfigsOverride],
  root: true,
  rules: eslintRules,
  settings: {
    'import/resolver': {
      typescript: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
};

module.exports = eslintConfig;

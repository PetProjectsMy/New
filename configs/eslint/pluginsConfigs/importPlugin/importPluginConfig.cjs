const { rulesPerFilesOverrides, importPluginRules } = require('./rules/_index.cjs');

const importPluginConfig = {
  extends: ['plugin:import/recommended'],
  files: ['**/*.{js,cjs,mjs,ts,tsx}'],
  overrides: [...rulesPerFilesOverrides],
  plugins: ['import'],
  rules: importPluginRules,
};

module.exports = { importPluginConfig };

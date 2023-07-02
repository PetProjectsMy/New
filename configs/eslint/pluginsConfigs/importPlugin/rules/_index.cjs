const { importsOrderRuleOptions } = require('./importOrderRule.cjs');
const { rulesPerFilesOverrides } = require('./rulesPerFilesOverrides.cjs');

const importPluginRules = {
  'import/consistent-type-specifier-style': ['warn', 'prefer-top-level'],
  'import/group-exports': 'warn',
  'import/newline-after-import': ['warn', { count: 1 }],
  'import/no-unassigned-import': ['error', { allow: ['src/**/*.{css,scss,sass,less}'] }],
  'import/no-unused-modules': [
    'warn',
    {
      missingExports: true,
      /*
      unusedExports: true
      not working with --config cli option
      https://github.com/import-js/eslint-plugin-import/issues/2678
      https://github.com/eslint/eslint/issues/16787
      */
    },
  ],
  'import/order': ['warn', importsOrderRuleOptions],
};

module.exports = { importPluginRules, rulesPerFilesOverrides };

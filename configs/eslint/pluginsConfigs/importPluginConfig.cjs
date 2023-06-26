const importsOrderRule = {
  groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'unknown'],
  'newlines-between': 'always',
  pathGroups: [
    {
      pattern: '*.{sass}',
      group: 'unknown',
      position: 'after',
    },
  ],
  alphabetize: {
    order: 'asc',
    orderImportKind: 'asc',
    caseInsensitive: true,
  },
  warnOnUnassignedImports: true,
};

const importPluginConfig = {
  files: ['**/*.{js,cjs,mjs,ts,tsx}'],
  plugins: ['import'],
  extends: ['plugin:import/recommended'],
  rules: { 'import/order': ['warn', importsOrderRule] },
  settings: {
    'import/resolver': {
      typescript: true,
    },
  },
};

module.exports = importPluginConfig;

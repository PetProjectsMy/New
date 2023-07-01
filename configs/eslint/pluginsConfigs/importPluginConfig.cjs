const importsOrderRule = {
  alphabetize: {
    caseInsensitive: true,
    order: 'asc',
    orderImportKind: 'asc',
  },
  groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'unknown'],
  'newlines-between': 'always',
  pathGroups: [
    {
      group: 'unknown',
      pattern: '*.{css,sass,scss,less}',
      patternOptions: { matchBase: true },
      position: 'after',
    },
  ],
  warnOnUnassignedImports: true,
};

const importPluginConfig = {
  extends: ['plugin:import/recommended'],
  files: ['**/*.{js,cjs,mjs,ts,tsx}'],
  plugins: ['import'],
  rules: { 'import/order': ['warn', importsOrderRule] },
  settings: {
    'import/resolver': {
      typescript: true,
    },
  },
};

module.exports = { importPluginConfig };

const importsOrderRule = {
  groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
  'newlines-between': 'always',
  alphabetize: {
    order: 'asc',
    orderImportKind: 'asc',
    caseInsensitive: true,
  },
};

const importPluginConfig = {
  files: ['**/*.{js,ts,tsx}'],
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

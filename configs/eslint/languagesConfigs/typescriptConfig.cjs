const { resolvePathFromProjectRoot } = require('../../utils/pathResolver.cjs');

const typescriptConfig = {
  files: ['**/*.{ts,tsx}'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: resolvePathFromProjectRoot('tsconfig.json'),
  },
  env: {
    browser: true,
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};

module.exports = typescriptConfig;

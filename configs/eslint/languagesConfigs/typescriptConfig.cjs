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
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
};

module.exports = { typescriptConfig };

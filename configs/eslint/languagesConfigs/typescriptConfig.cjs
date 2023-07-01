const {
  resolvePathFromProjectRoot,
} = require('../../utils/pathResolver/pathResolver.cjs');

const typescriptConfig = {
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  files: ['**/*.{ts,tsx}'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: resolvePathFromProjectRoot('tsconfig.json'),
  },
  plugins: ['@typescript-eslint'],
};

module.exports = { typescriptConfig };

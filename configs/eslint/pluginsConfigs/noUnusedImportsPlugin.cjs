const noUnusedImportsPluginConfig = {
  files: ['**/*.{js,cjs,mjs,ts,tsx}'],
  plugins: ['unused-imports'],
  rules: { 'unused-imports/no-unused-imports': 'warn' },
};

module.exports = { noUnusedImportsPluginConfig };

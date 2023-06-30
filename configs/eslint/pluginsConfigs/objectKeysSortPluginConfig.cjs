const objectKeysSortPluginConfig = {
  files: ['*.{js,cjs,mjs,jsx,ts,tsx}'],
  plugins: ['sort-keys-fix'],
  rules: {
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
};

module.exports = { objectKeysSortPluginConfig };

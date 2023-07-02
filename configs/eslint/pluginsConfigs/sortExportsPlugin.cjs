const exportsSortPluginConfig = {
  files: ['**/*.{js,cjs,mjs,ts,tsx}'],
  plugins: ['sort-exports'],
  rules: {
    'sort-exports/sort-exports': [
      'warn',
      { ignoreCase: false, sortDir: 'asc', sortExportKindFirst: 'value' },
    ],
  },
};

module.exports = { exportsSortPluginConfig };

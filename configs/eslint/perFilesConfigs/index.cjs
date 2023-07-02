const perFilesConfigsOverride = [
  {
    files: ['utilTypes/**/*.d.ts'],
    rules: {
      'import/group-exports': 'off',
    },
  },
];

module.exports = { perFilesConfigsOverride };

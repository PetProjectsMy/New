const perFilesConfigsOverride = [
  {
    files: ['utilTypes/**/*.d.ts'],
    rules: {
      'import/group-exports': 'off',
    },
  },
  {
    files: ['src/app/types/declarations.d.ts'],
    rules: {
      'import/no-unused-modules': 'off',
    },
  },
];

module.exports = { perFilesConfigsOverride };

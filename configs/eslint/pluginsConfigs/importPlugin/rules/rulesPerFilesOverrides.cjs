const rulesPerFilesOverrides = [
  {
    files: [
      // ↓↓↓↓↓↓   https://github.com/import-js/eslint-plugin-import/issues/1469
      'configs/**/*.cjs', //  no supporting of ES5 modules with 'require'
      'src/index.tsx',
      'src/types/declarations.d.ts',
      'utilTypes/**/*.d.ts',
    ],
    rules: {
      'import/no-unused-modules': 'off',
    },
  },
];

module.exports = {
  rulesPerFilesOverrides,
};

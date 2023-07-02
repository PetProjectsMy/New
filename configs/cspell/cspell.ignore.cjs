const cspellIgnorePaths = [
  '.git/',
  '.vscode/',
  'dist/',
  'build/',
  'node_modules/',
  'pnpm-lock.yaml',
  'dictionary.txt',
  'src/styles/**/normalize.scss',
  '**/*.{gif,png,svg}',
  '**/.prettierrc', // cspell:disable-line
  '**/.editorconfig',
];

module.exports = { cspellIgnorePaths };

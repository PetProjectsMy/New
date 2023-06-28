const path = require('path');

const { resolvePathFromProjectRoot } = require('../utils/pathResolver.cjs');

const projectRootPath = resolvePathFromProjectRoot('./');
const packageJSONDictionaryConfigPath = path.resolve(
  __dirname,
  './dictionaries/package-json.dict/config.cjs'
);

const cspellConfig = {
  version: '0.2',
  globRoot: projectRootPath,
  language: 'en,ru',
  ignorePaths: [
    'dist/',
    'build/',
    'node_modules/',
    'pnpm-lock.yaml',
    '**/*.{ts,cjs,yml,tsx,html,scss,txt}',
    '/tsconfig.json',
  ],
  import: [packageJSONDictionaryConfigPath],
};

module.exports = cspellConfig;

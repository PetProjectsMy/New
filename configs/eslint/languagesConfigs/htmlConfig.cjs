const htmlConfig = {
  extends: ['plugin:@html-eslint/recommended'],
  files: ['*.html'],
  parser: '@html-eslint/parser',
  plugins: ['@html-eslint'],
  rules: {
    '@html-eslint/indent': ['error', 2],
  },
};

module.exports = { htmlConfig };

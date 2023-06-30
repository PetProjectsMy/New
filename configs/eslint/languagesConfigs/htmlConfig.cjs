const htmlConfig = {
  files: ['*.html'],
  plugins: ['@html-eslint'],
  parser: '@html-eslint/parser',
  extends: ['plugin:@html-eslint/recommended'],
  rules: {
    '@html-eslint/indent': ['error', 2],
  },
};

module.exports = { htmlConfig };

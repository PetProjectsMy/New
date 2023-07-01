const javascriptConfig = {
  env: {
    node: true,
  },
  extends: ['eslint:recommended'],
  files: ['**/*.{js,cjs}'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
};

module.exports = { javascriptConfig };

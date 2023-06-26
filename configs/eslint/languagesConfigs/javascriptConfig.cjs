const javascriptConfig = {
  files: ['**/*.{js,cjs}'],
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  env: {
    node: true,
  },
};

module.exports = javascriptConfig;

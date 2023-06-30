// Typescript related options defined in typescriptConfig.cjs
const reactConfig = {
  files: ['**/*.{jsx,tsx}'],
  plugins: ['jsx-a11y', 'react', 'react-hooks'],
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};

module.exports = { reactConfig };

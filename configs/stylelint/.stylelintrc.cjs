const { resolvePathFromProjectRoot } = require('../utils/pathResolver.cjs');

const ignorePath = resolvePathFromProjectRoot(
  'configs/stylelint/.stylelintignore'
);

const stylelintConfig = {
  cache: false,
  extends: ['stylelint-config-standard-scss'],
  ignorePath: [ignorePath], // NOT WORKING
};

module.exports = stylelintConfig;

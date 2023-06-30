const { htmlConfig } = require('./htmlConfig.cjs');
const { javascriptConfig } = require('./javascriptConfig.cjs');
const { reactConfig } = require('./reactConfig.cjs');
const { typescriptConfig } = require('./typescriptConfig.cjs');

const languagesConfigOverride = [
  htmlConfig,
  javascriptConfig,
  typescriptConfig,
  reactConfig,
];

module.exports = { languagesConfigOverride };

const path = require('path');

const PROJECT_ROOT_RELATIVE_PATH = '../../../';

/**
 * @param {string} fromRootRelativePath
 */
function resolvePathFromProjectRoot(fromRootRelativePath) {
  const pathResolved = path.resolve(__dirname, PROJECT_ROOT_RELATIVE_PATH, fromRootRelativePath);

  return pathResolved;
}

module.exports = { resolvePathFromProjectRoot };

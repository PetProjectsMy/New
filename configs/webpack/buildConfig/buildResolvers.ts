import type webpack from 'webpack';

import { resolvePathFromProjectRoot } from '../../utils/pathResolver/pathResolver';

export function buildResolvers(): webpack.ResolveOptions {
  return {
    alias: {
      '@-utils': resolvePathFromProjectRoot('src/utils/'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  };
}

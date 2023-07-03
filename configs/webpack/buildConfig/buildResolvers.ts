import { resolvePathFromProjectRoot } from '../../utils/pathResolver/pathResolver';

import type webpack from 'webpack';

export function buildResolvers(): webpack.ResolveOptions {
  return {
    alias: {
      '@': resolvePathFromProjectRoot('src'),
      '@-utils': resolvePathFromProjectRoot('src/shared/utils'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  };
}

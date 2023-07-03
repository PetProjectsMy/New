import { resolvePathFromProjectRoot } from '../utils/pathResolver/pathResolver';

import { buildWebpackConfig } from './buildConfig';
import { BuildMode } from './types/buildOptions';

import type { BuildEnv, BuildPaths } from './types/buildOptions';
import type webpack from 'webpack';

const buildPaths: BuildPaths = {
  build: resolvePathFromProjectRoot('dist'),
  entry: resolvePathFromProjectRoot('src/index.tsx'),
  html: resolvePathFromProjectRoot('public/index.html'),
};

export default (env: BuildEnv) => {
  const mode = env.mode || BuildMode.DEVELOPMENT;
  const isDev = mode === BuildMode.DEVELOPMENT;
  const port = env.port || 3000;

  const webpackConfig: webpack.Configuration = buildWebpackConfig({
    isDev,
    mode,
    paths: buildPaths,
    port,
  });
  return webpackConfig;
};

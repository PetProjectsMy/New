import { BuildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';

import type { BuildOptions } from '../types/buildOptions';
import type { Configuration as IWebpackConfiguration } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

type WebpackConfiguration = UtilTypes.InterfaceToType<IWebpackConfiguration>;
type Configuration = WebpackConfiguration & {
  devServer?: DevServerConfiguration;
};

export function buildWebpackConfig(buildOptions: BuildOptions): Configuration {
  const { mode, paths, isDev, port } = buildOptions;

  const webpackConfig: UtilTypes.WithRequiredKeys<Configuration, 'output'> = {
    entry: paths.entry,
    mode,
    module: {
      rules: buildLoaders({ isDev }),
    },
    optimization: {
      splitChunks: {
        chunks: 'async',
        minChunks: 1,
        minSize: 0,
      },
    },
    output: {
      chunkFilename: 'chunks/[chunkhash].js',
      clean: true,
      filename: '[name].[contenthash].js',
      path: paths.build,
    },
    plugins: buildPlugins({ htmlPath: paths.html, isDev }),
    resolve: buildResolvers(),
    stats: 'errors-warnings',
  };

  if (isDev) {
    webpackConfig.devServer = BuildDevServer({ port });
    webpackConfig.output.filename = '[name].js';
    webpackConfig.output.chunkFilename = 'chunks/[id].js';
    webpackConfig.devtool = 'inline-source-map';
  }

  return webpackConfig;
}

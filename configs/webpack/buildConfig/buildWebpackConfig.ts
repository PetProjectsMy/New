import type { Configuration as IWebpackConfiguration } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import type { BuildOptions } from '../types/config';

import { BuildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';

type WebpackConfiguration = UtilTypes.InterfaceToType<IWebpackConfiguration>;
type Configuration = WebpackConfiguration & {
  devServer?: DevServerConfiguration;
};

export function buildWebpackConfig(buildOptions: BuildOptions): Configuration {
  const { mode, paths, isDev, port } = buildOptions;
  const webpackConfig: UtilTypes.WithRequiredKeys<Configuration, 'output'> = {
    mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders({ isDev }),
    },
    resolve: buildResolvers(),
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins({ htmlPath: paths.html, isDev }),
    stats: 'errors-warnings',
  };

  if (isDev) {
    webpackConfig.devServer = BuildDevServer({ port });
    webpackConfig.output.filename = '[name].js';
    webpackConfig.devtool = 'inline-source-map';
  }

  return webpackConfig;
}

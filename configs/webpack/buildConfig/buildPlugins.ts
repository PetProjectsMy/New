import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

import { resolvePathFromProjectRoot } from '../../utils/pathResolver';

type PluginsOptions = { htmlPath: string; isDev: boolean };

export function buildPlugins(
  options: PluginsOptions
): webpack.WebpackPluginInstance[] {
  const { htmlPath, isDev } = options;

  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: htmlPath,
    favicon: resolvePathFromProjectRoot('public/favicon.svg'),
  });

  const webpackProgressPlugin = new webpack.ProgressPlugin();

  const fileNameTemplate = `css/[name]${isDev ? '' : '.[contenthash]'}.css`;
  const chunkFilenameTemplate = `css/[name].[id]${
    isDev ? '' : '.[contenthash]'
  }.css`;
  const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: fileNameTemplate,
    chunkFilename: chunkFilenameTemplate,
  });

  return [htmlWebpackPlugin, miniCssExtractPlugin, webpackProgressPlugin];
}

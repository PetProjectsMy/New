import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

import { resolvePathFromProjectRoot } from '../../utils/pathResolver/pathResolver';

type PluginsOptions = { htmlPath: string; isDev: boolean };

export function buildPlugins(
  options: PluginsOptions
): webpack.WebpackPluginInstance[] {
  const { htmlPath, isDev } = options;

  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    favicon: resolvePathFromProjectRoot('public/favicon.svg'),
    template: htmlPath,
  });

  const webpackProgressPlugin = new webpack.ProgressPlugin();

  const fileNameTemplate = `css/[name]${isDev ? '' : '.[contenthash]'}.css`;
  const chunkFilenameTemplate = `css/[name].[id]${
    isDev ? '' : '.[contenthash]'
  }.css`;
  const miniCssExtractPlugin = new MiniCssExtractPlugin({
    chunkFilename: chunkFilenameTemplate,
    filename: fileNameTemplate,
  });

  return [htmlWebpackPlugin, miniCssExtractPlugin, webpackProgressPlugin];
}

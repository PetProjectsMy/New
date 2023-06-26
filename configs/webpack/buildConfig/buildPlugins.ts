import htmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

type PluginsOptions = { htmlPath: string };

export function buildPlugins(
  options: PluginsOptions
): webpack.WebpackPluginInstance[] {
  return [
    new htmlWebpackPlugin({
      template: options.htmlPath,
    }),
    new webpack.ProgressPlugin(),
  ];
}

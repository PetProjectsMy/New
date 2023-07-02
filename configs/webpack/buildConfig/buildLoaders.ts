import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import type webpack from 'webpack';

type BuildLoadersOptions = { isDev: boolean };

export function buildLoaders(options: BuildLoadersOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const typescriptLoader = {
    exclude: /node_modules/,
    test: /\.tsx?$/,
    use: 'ts-loader',
  };

  const stylesLoader = {
    test: /\.s[ac]ss$/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /\w+.module.scss$/,
            localIdentHashDigestLength: 5,
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64]',
          },
        },
      },
      'sass-loader',
    ],
  };

  return [typescriptLoader, stylesLoader];
}

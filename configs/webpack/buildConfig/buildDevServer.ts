import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

type DevServerOptions = { port: number };

export function BuildDevServer(options: DevServerOptions): DevServerConfiguration {
  const { port } = options;

  return { historyApiFallback: true, port };
}

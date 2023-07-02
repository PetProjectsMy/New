export const enum BuildMode {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

type BuildEnv = {
  mode?: BuildMode;
  port?: number;
};

type BuildPaths = {
  entry: string;
  html: string;
  build: string;
};

type BuildOptions = {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
};

export type { BuildEnv, BuildOptions, BuildPaths };

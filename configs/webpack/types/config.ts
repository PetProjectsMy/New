export const enum BuildMode {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

export type BuildEnv = {
  mode?: BuildMode;
  port?: number;
};

export type BuildPaths = {
  entry: string;
  html: string;
  build: string;
};

export type BuildOptions = {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
};

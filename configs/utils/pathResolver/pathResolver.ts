import path from 'path';

const PROJECT_ROOT_RELATIVE_PATH = '../../../';

export function resolvePathFromProjectRoot(fromRootRelativePath: string) {
  const pathResolved = path.resolve(
    __dirname,
    PROJECT_ROOT_RELATIVE_PATH,
    fromRootRelativePath
  );

  return pathResolved;
}

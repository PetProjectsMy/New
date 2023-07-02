const importsOrderRuleOptions = {
  alphabetize: {
    caseInsensitive: true,
    order: 'asc',
    orderImportKind: 'asc',
  },
  groups: ['builtin', 'external', 'type', 'parent', 'sibling', 'index', 'unknown'],
  'newlines-between': 'always',
  pathGroups: [
    {
      group: 'unknown',
      pattern: '*.{css,sass,scss,less}',
      patternOptions: { matchBase: true },
      position: 'after',
    },
  ],
  warnOnUnassignedImports: true,
};

module.exports = { importsOrderRuleOptions };

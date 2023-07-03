const importsOrderRuleOptions = {
  alphabetize: {
    caseInsensitive: true,
    order: 'asc',
    orderImportKind: 'asc',
  },
  groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type', 'unknown'],
  'newlines-between': 'always',
  pathGroups: [
    {
      group: 'unknown',
      pattern: '*.{css,sass,scss,less}',
      patternOptions: { matchBase: true },
      position: 'after',
    },
    {
      group: 'parent',
      pattern: '@/pages*',
      position: 'before',
    },
  ],
  warnOnUnassignedImports: true,
};

module.exports = { importsOrderRuleOptions };

module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  noUnusedLocals: true,
  singleQuote: true,
  printWidth: 120,
  overrides: [
    {
      files: '*.md',
      options: {
        tabWidth: 2,
      },
    },
    {
      files: '*.json',
      options: {
        tabWidth: 2,
      },
    },
  ],
};

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['app/**/*.jsx?$'],
  coverageThreshold: {
    global: {
      statements: 75,
      branches: 75,
      functions: 75,
      lines: 75,
    },
  },
  moduleDirectories: ['node_modules', 'app'],
  testRegex: '(__)?tests(__)?/.*\\.test\\.jsx?$',
};

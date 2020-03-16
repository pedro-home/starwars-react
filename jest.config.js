module.exports = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['app/**/*.{js,jsx}'],
  coverageThreshold: {
    global: {
      statements: 75,
      branches: 75,
      functions: 75,
      lines: 75,
    },
  },
  globals: {
    ENVIRONMENT: 'test',
  },
  moduleDirectories: ['node_modules', 'app'],
  testRegex: '(__)?tests(__)?/.*\\.test\\.jsx?$',
  setupFiles: ['<rootDir>/app/__mocks__/globals/index.js'],
  moduleNameMapper: {
    '\\.(bmp|gif|jpg|jpeg|png|psd|svg|webp)$': '<rootDir>/app/__mocks__/media.js',
  },
};

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
  transform: {
    '\\.(jsx?)$': ['babel-jest', { rootMode: 'upward' }],
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/app/__mocks__/media.js',
  },
};

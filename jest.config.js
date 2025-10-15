export default {
  testEnvironment: 'node',
  transform: {},
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  testMatch: [
    '**/examples/**/*.test.js',
  ],
  collectCoverageFrom: [
    'examples/**/*.js',
    '!examples/**/*.test.js',
  ],
  coverageDirectory: 'coverage',
  verbose: true,
};

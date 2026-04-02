module.exports = {
  testEnvironment: 'node',
  transformIgnorePatterns: ['node_modules/(?!(sucrase)/)'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': ['babel-jest', { configFile: false, presets: ['@babel/preset-typescript', ['@babel/preset-env', { targets: { node: 'current' } }]] }],
  },
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

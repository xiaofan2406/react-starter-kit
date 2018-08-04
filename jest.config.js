module.exports = {
  collectCoverageFrom: ['src/**/*.{js,mjs}'],
  setupFiles: ['<rootDir>/config/jest/enzymeAdapter.js'],
  setupTestFrameworkScriptFile: '<rootDir>/config/jest/frameworkSetup.js',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.spec.{js,mjs}'],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|mjs)$': 'babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|mjs|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },
  moduleNameMapper: {
    '^assets(.*)$': '<rootDir>/src/assets$1',
    '^components(.*)$': '<rootDir>/src/components$1',
    '^factories(.*)$': '<rootDir>/src/factories$1',
    '^styles(.*)$': '<rootDir>/src/styles$1',
    '^utils(.*)$': '<rootDir>/src/utils$1',
    '^widgets(.*)$': '<rootDir>/src/widgets$1',
  },
  moduleFileExtensions: ['js', 'mjs', 'json'],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/utils/compose.js',
    'index.js',
    'App.js',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};

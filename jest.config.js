module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['dist/**'],
  coveragePathIgnorePatterns: ['/dist/Generated/', '.d.ts'],
  testTimeout: 60000,
};
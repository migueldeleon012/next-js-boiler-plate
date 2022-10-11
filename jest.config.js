const nextJest = require('next/jest');
const createJestConfig = nextJest({
  dir: './',
});
const customJestConfig = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
module.exports = createJestConfig(customJestConfig);

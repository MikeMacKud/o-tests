require('dotenv-load')();
const path = require('path');
const proc_name = path.basename(__dirname);
const reportDir = process.env.TEST_REPORTS_DIR || `./coverage`;

// See more: https://jestjs.io/docs/en/configuration
// File must be the same across all projects, like commitlint.config.js
module.exports = {
  "moduleFileExtensions": [
    "js",
    "jsx",
    "json",
    "ts",
    "tsx"
  ],
  "collectCoverage": false,
  "collectCoverageFrom": [
    "**/*.{ts,js}",
    "!**/*.spec.{ts,js}",
    "!**/node_modules/**",
    "!**/build/**",
    "!**/reports/**"
  ],
  "transform": {
    "\\.ts$": "ts-jest"
  },
  "coverageThreshold": {
    "global": {
      "branches": 100,
      "functions": 100,
      "lines": 100,
      "statements": 100
    }
  },
  "coverageReporters": [
    "text",
    "text-summary"
  ],
  "testEnvironment": "node",
  "testRegex": "(/jest/.*|(\\.|/)(test))\\.(js|ts)x?$",
  "modulePathIgnorePatterns": [
    "jest.config.js",
    "/dist/",
  ],
  "testPathIgnorePatterns": [
    "/node_modules/",
    "/build/",
    "/reports/",
    "jest/config.ts",
    "jest/request.ts"
  ],
  "setupFiles": [
    "<rootDir>/jest/config.ts"
  ],
  "reporters": [
    "default",
    ["jest-html-reporters", {
      "publicPath": reportDir,
      "filename": `${proc_name}_report.html`,
      "expand": true,
      "pageTitle": `${proc_name}. Date: ${new Date()}`
    }],
    ["./node_modules/jest-html-reporter", {
      "outputPath": `${reportDir}/${proc_name}_summary.html`,
      "pageTitle": `${proc_name}. Date: ${new Date()}`
    }]
  ],
  "globals": {
    "ts-jest": {
      "tsconfig": "<rootDir>/tsconfig.jest.json",
    },
  }
};

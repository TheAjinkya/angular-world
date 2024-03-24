module.exports = {
  "preset": "jest-preset-angular",
  "setupFilesAfterEnv": ['<rootDir>/node_modules/@hirez_io/observer-spy/dist/setup-auto-unsubscribe.js'],
  "transformIgnorePatterns": [
      "node_modules/(?!@ngrx|ngx-socket-io)" // Last any packages here that error
  ],
  "transform": {
      "^.+\\.(ts|js|html)$": "ts-jest"
  },
  "testPathIgnorePatterns": [
      "<rootDir>/node_modules/",
      "<rootDir>/dist/",
      "<rootDir>/cypress/",
      "<rootDir>/src/test.ts",
  ]
};
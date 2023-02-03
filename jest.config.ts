import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
  testResultsProcessor: "jest-json-reporter",
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  automock: false,
  setupFilesAfterEnv: ["./jest.setup.ts"],
  clearMocks: true,
  collectCoverage: false,

  // globals: {
  //   "": ""
  // },
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "./jest-reports",
        pageTitle: "Elabor8 API Tests",
        filename: "report.html"
      }
    ]
  ],
  testPathIgnorePatterns: ["<rootDir>/tests/ignoreTests"],
  maxWorkers: 1,
  testTimeout: 200000 // 20 seconds
}
export default config

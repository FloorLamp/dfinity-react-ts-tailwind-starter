const dfxJson = require("./dfx.json");
const aliases = require("./webpack.aliases");

module.exports = {
  globals: {
    __HOST__: `http://${dfxJson.networks.local.bind}`,
  },
  testEnvironment: "<rootDir>/src/frontend/__test-utils__/env.js",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/frontend/__test-utils__/fileMock.js",
    // Allow jest to import aliased canisters
    ...aliases,
  },
  setupFilesAfterEnv: ["<rootDir>/src/frontend/setupTests.js"],
};

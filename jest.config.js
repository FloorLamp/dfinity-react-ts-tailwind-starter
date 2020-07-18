const dfxJson = require("./dfx.json");
const aliases = require("./webpack.aliases");

module.exports = {
  globals: {
    __HOST__: `http://${dfxJson.networks.local.bind}`,
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/frontend/__mocks__/fileMock.js",
    // Allow jest to import aliased canisters
    ...aliases,
  },
  setupFilesAfterEnv: ["<rootDir>/src/frontend/setupTests.js"],
};

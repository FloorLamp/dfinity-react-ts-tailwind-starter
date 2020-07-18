const path = require("path");
const dfxJson = require("./dfx.json");

// List of all aliases for canisters. This creates the module alias for
// the `import ... from "ic:canisters/xyz"` where xyz is the name of a
// canister.
module.exports = Object.entries(dfxJson.canisters).reduce(
  (acc, [name, value]) => {
    const outputRoot = path.join(
      __dirname,
      dfxJson.defaults.build.output,
      name
    );
    return {
      ...acc,
      ["ic:canisters/" + name]: path.join(outputRoot, name + ".js"),
      ["ic:idl/" + name]: path.join(outputRoot, name + ".did.js"),
    };
  },
  {}
);

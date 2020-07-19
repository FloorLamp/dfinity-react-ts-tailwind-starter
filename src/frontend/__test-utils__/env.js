const JSDOMEnvironment = require("jest-environment-jsdom");
const { TextEncoder } = require("util");
const crypto = require("isomorphic-webcrypto");

// Extend jsdom env with some globals
// ArrayBuffer is needed for isomorphic-webcrypto, see https://github.com/facebook/jest/issues/7780
class CanisterEnvironment extends JSDOMEnvironment {
  constructor(config) {
    super(
      Object.assign({}, config, {
        globals: Object.assign({}, config.globals, {
          Uint32Array: Uint32Array,
          Uint8Array: Uint8Array,
          ArrayBuffer: ArrayBuffer,
          TextEncoder: TextEncoder,
        }),
      })
    );
  }

  async setup() {
    this.global.crypto = crypto;
  }

  async teardown() {}

  runScript() {}
}

module.exports = CanisterEnvironment;

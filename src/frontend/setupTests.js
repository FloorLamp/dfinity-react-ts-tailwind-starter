// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

require("jest-fetch-mock").enableMocks();
fetchMock.dontMock();

// jest.setTimeout(20000);

import { HttpAgent, IDL } from "@dfinity/agent";
import createAgent from "./createAgent";
import crypto from "crypto";

if (typeof global.TextEncoder === "undefined") {
  const { TextEncoder } = require("util");
  global.TextEncoder = TextEncoder;
}
if (typeof global.crypto === "undefined") {
  global.crypto = {
    subtle: {
      digest: (_, data) =>
        crypto.createHash("sha256").update(Buffer.from(data)).digest(),
    },
  };
}
global.ic = { agent: createAgent(__HOST__), HttpAgent, IDL };

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

require("jest-fetch-mock").enableMocks();
fetchMock.dontMock();

// Increase jest timeout if necessary
// jest.setTimeout(10000);

import { HttpAgent, IDL } from "@dfinity/agent";
import createAgent from "./createAgent";

// Create a new agent per test
global.ic = { agent: createAgent(__HOST__), HttpAgent, IDL };

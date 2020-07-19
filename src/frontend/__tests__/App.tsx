import React from "react";
import { render } from "@testing-library/react";
import App from "../pages/App";

test("renders greeting", async () => {
  const { findByText } = render(<App />);
  const linkElement = await findByText(/hello, react!/i, undefined, {
    // Wait for canister response
    timeout: 5000,
  });
  expect(linkElement).toBeInTheDocument();
});

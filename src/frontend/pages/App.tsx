import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

import backend from "ic:canisters/backend";

function App() {
  const [greeting, setGreeting] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const result = await backend.greet("React");
        setGreeting(result);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    })();
  }, []);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-900 text-white">
      <img src={logo} className="w-48 h-48" alt="logo" />
      <p>{greeting}</p>
      <p className="whitespace-pre text-red-600">{error}</p>
    </div>
  );
}

export default App;

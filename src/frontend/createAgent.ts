import * as ic from "@dfinity/agent";

const createAgent = (host: string | undefined) => {
  const { HttpAgent, IDL, Principal } = ic;
  const keyPair = ic.generateKeyPair();
  const agent = new HttpAgent({
    principal: Principal.selfAuthenticating(keyPair.publicKey),
    host,
  });
  agent.addTransform(ic.makeNonceTransform());
  agent.setAuthTransform(ic.makeAuthTransform(keyPair));
  return agent;
};

export default createAgent;

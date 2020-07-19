# dfinity-react-ts-tailwind-starter

A starter project for DFINITY similar to [Create React App](https://create-react-app.dev/):

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/docs/home.html)
- [Tailwind CSS](https://tailwindcss.com/)
- [webpack-dev-server](https://webpack.js.org/configuration/dev-server)
- [Babel](https://babeljs.io/)
- [Jest](https://jestjs.io/)

## Developing

Start a local network:

```
dfx start
```

Then, start the dev server:

```
npm start
```

## Typecheck

```
npm run types
```

Canisters don't have types yet, so they're all declared to be [`any`](./src/frontend/types/custom.d.ts).

## Testing

To test canisters, ensure that a local network is running.

The default [testing library's async timeout](https://testing-library.com/docs/dom-testing-library/api-async#waitfor) is 1000ms, which is not long enough for a canister response. 5000ms is recommended for each `waitFor` call. The [default Jest timeout](https://jestjs.io/docs/en/jest-object.html#jestsettimeouttimeout) may also need to be increased.

## Building and Installing

Follow the steps to create canisters, build, and install:

```
dfx canister create --all
dfx build
dfx canister install --all
```

## Links

- [Quick Start](https://sdk.dfinity.org/docs/quickstart/quickstart.html)
- [SDK Developer Tools](https://sdk.dfinity.org/docs/developers-guide/sdk-guide.html)
- [Motoko Programming Language Guide](https://sdk.dfinity.org/docs/language-guide/motoko.html)
- [Motoko Language Quick Reference](https://sdk.dfinity.org/docs/language-guide/language-manual.html)

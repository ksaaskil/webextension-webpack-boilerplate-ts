# Webextension webpack boilerplate with TypeScript

Boilerplate for building webextensions for Chrome and Firefox using [webpack](https://webpack.js.org/) and [TypeScript](https://www.typescriptlang.org/).

Adapted from [chrome-extension-webpack-boilerplate](https://github.com/samuelsimoes/chrome-extension-webpack-boilerplate) with the added features:

- Support for TypeScript
- Inclusion of [webextension-polyfill-ts](https://github.com/Lusito/webextension-polyfill-ts) for accessing browser APIs via [webextension-polyfill](https://github.com/mozilla/webextension-polyfill)
- Refactored webpack configuration for separate development and production configurations

## Running locally (in Chrome)

1. Run `yarn start` or `yarn build` to create bundle
1. Open the Extension Management page by navigating to `chrome://extensions`.
1. Enable Developer Mode by clicking the toggle switch next to Developer mode.
1. Click the `Load unpacked` button and select `build/` directory.

## Development

Install dependencies:

```bash
$ yarn
```

Create bundle in `build/` directory:

```bash
$ yarn build
```

Run webpack development server with hot reloading:

```bash
$ yarn start
```

## License

This project acknowledges code from the following projects.

### [Chrome webextension boilerplate](https://github.com/samuelsimoes/chrome-extension-webpack-boilerplate)

Copyright (c) 2016 Samuel Simões.

# Jest and Enzyme Testing with TypeScript

This is an example (for reference purposes) on how to use Jest and Enzyme to test React.JS 16.x component developed in TypeScript 2.x.

Jest is a decent unit testing option which provides great TypeScript support.

## Getting Started

1. Clone this repo:

```sh
git clone https://github.com/cedrickchee/react-typescript-jest-enzyme-testing react-typescript
cd react-typescript
```

2. Install project dependencies:

```sh
yarn

# If you are using NPM
npm install
```
3. Start Jest to run tests:

```sh
# start Jest in watch mode
yarn test -- --watch

# or if you are using NPM
npm t -- --watch
```

4. There is no step 4. You can start developing your React component and write unit test along the way.

# Project

How's this project was created? From a clean project setup, here are the steps to recreate this example:

- **Step 0: Pre-requisite**

Install React.JS and TypeScript:

```sh
yarn add react react-dom typescript

# or if you are using NPM
npm i react react-dom typescript
```

- **Step 1: Install Jest**

Install the following using yarn/npm:

```sh
yarn add jest @types/jest ts-jest --dev

# or if you are using NPM
npm i jest @types/jest ts-jest -D
```

Explanation:

- Install Jest framework (`jest`).
- Install the types for Jest (`@types/jest`).
- Install the TypeScript preprocessor for Jest (`ts-jest`) which allows jest to transpile TypeScript on the fly and have source-map support built in.
- Save all of these to your dev dependencies (testing is almost always a npm dev-dependency).

- **Step 2: Configure Jest**

Add the following `jest.config.js` file to the root of your project:

```javascript
module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
}
```

Explanation:

- We always recommend having _all_ TypeScript files in a `src` folder in your project. We assume this is true and specify this using the `roots` option.
- The `transform` config just tells Jest to use `ts-jest` for ts / tsx files.
- The `testRegex` tells Jest to look for tests in any `__tests__` folder AND also any files anywhere that use the `(.test|.spec).(ts|tsx)` extension e.g. `checkbox.test.tsx` etc.
- The `moduleFileExtensions` tells Jest to recognize our file extensions. This is needed as we add ts/tsx into the defaults (`js|jsx|json|node`).

- **Step 3: Run tests**

Run npx jest --watch (or `./node_modules/.bin/jest --watch`) from your project root and Jest will execute any tests you have.

_Optional: Add script target for npm scripts_

Add this in `package.json`:

```javascript
{
  "test": "jest --watch"
}
```

- This allows you to run the tests in watch mode with a simple `yarn test` or `npm t`.

- **Step 4: Setup Enzyme**

Enzyme allows you to test React components with DOM support. There are three steps to setting up Enzyme:

1. Install Enzyme, types for Enzyme, a better snapshot serializer for Enzyme, enzyme-adapter-react for your React version:

```sh
yarn add enzyme @types/enzyme enzyme-to-json enzyme-adapter-react-16 --dev

# or if you are using NPM
npm i enzyme @types/enzyme enzyme-to-json enzyme-adapter-react-16 -D
```

2. Add "snapshotSerializers" and "setupTestFrameworkScriptFile" to your `jest.config.js`:

```javascript
module.exports = {
  // ... ... ... TRUNCATED. Other parts as before ... ... ...

  // Setup Enzyme
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "setupTestFrameworkScriptFile": "<rootDir>/src/setupEnzyme.ts",
}
```

3. Create `src/setupEnzyme.ts` file.

```javascript
import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new EnzymeAdapter() });
```

That's all to it!
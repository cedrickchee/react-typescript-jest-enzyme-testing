import { sum } from "./foo";

/**
 * Basic Example
 */
test("basic", () => {
  expect(sum()).toBe(0);
});

test("basic again", () => {
  expect(sum(1, 2)).toBe(3);
});

/**
 * Async Example
 *
 * Jest has built-in async/await support. e.g.
 */
test("basic async", async () => {
  expect(sum()).toBe(0);
});

test("basic async again", async () => {
  expect(sum(1, 2)).toBe(3);
});

/**
 * Enzyme Example
 *
 * Enzyme allows you to test react components with dom support. There are three
 * steps to setting up enzyme:
 *
 * 1. Install enzyme, types for enzyme, a better snapshot serializer for enzyme,
 * enzyme-adapter-react for your react version:
 * $ npm i enzyme @types/enzyme enzyme-to-json enzyme-adapter-react-16 -D
 *
 * 2. Add "snapshotSerializers" and "setupTestFrameworkScriptFile" to your
 * jest.config.js:
 */

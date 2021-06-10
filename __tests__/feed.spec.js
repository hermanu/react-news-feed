// const { expect } = require("jest");

describe("Failed test", () => {
  test("should not work", () => {
    expect(1).toBe(2);
  });
});

describe("working text", () => {
  test("should work", () => {
    expect(1).toBe(1);
  });
});

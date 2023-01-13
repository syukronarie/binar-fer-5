import { sum } from "./sum";

describe("sum test", () => {
  test("should return correctly", () => {
    const result = sum(10, 20);
    expect(result).toBe(30);
  });
  test("should throw an error", () => {
    expect(() => {
      sum(true, 10);
    }).toThrow("a and b should be a number");
    expect(() => {
      sum();
    }).toThrow("a and b should be a number");
  });
});

import { modulus } from "./modulus";

describe("modulus test", () => {
  it("should return correctly", () => {
    expect(modulus(10, 2)).toBe(0);
    expect(modulus(21, 5)).toBe(1);
    expect(modulus(99, 11)).toBe(0);
    expect(modulus(53, 3)).toBe(2);
  });
  it("should return error while parameter is boolean", () => {
    expect(() => {
      modulus(true, 2);
    }).toThrow("parameters should be a number");
  });
  it("should return error while parameter is string", () => {
    expect(() => {
      modulus("90", 2);
    }).toThrow("parameters should be a number");
  });
  it("should return error while parameter is array", () => {
    expect(() => {
      modulus([], 2);
    }).toThrow("parameters should be a number");
  });
  it("should return error while parameter is object", () => {
    expect(() => {
      modulus({}, {});
    }).toThrow("parameters should be a number");
  });

  it("should return error while parameter is null", () => {
    expect(() => {
      modulus(null, 9);
    }).toThrow("parameters should be a number");
  });
  it("should return error while parameter is undefined", () => {
    expect(() => {
      modulus(undefined, 9);
    }).toThrow("parameters should be a number");
  });
  it("should return error while parameter is NaN", () => {
    expect(() => {
      modulus(1, NaN);
    }).toThrow("parameters should be a number");
  });
});

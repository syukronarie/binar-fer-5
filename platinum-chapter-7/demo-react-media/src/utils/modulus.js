export const modulus = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
    throw new Error("parameters should be a number");
  }
  return a % b;
};

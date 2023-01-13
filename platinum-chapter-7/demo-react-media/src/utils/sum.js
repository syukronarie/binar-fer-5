export function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number")
    throw new Error("a and b should be a number");
  return a + b;
}

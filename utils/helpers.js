/**
 * The function exports a sum of two input parameters.
 * @param a - The first parameter of the `sum` function. It represents a number that will be added to
 * the second parameter `b`.
 * @param b - The parameter "b" is the second number that will be added to the first number "a" in the
 * function.
 * @returns The sum of the two input parameters `a` and `b`.
 */

export const sum = (a, b) => {
  return a + b;
};

/**
 * It converts a number to a letter, where A = 1, B = 2, C = 3, etc
 * @param {number} num - The number to convert to letters.
 * @returns the column name of the cell.
 */

export function numToLetters(num) {
  if (num > 26) return null;
  let mod = num % 26,
    pow = (num / 26) | 0,
    out = mod ? String.fromCharCode(64 + mod) : (--pow, 'Z');
  return pow ? numToLetters(pow) + out : out;
}

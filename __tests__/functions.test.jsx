import { numToLetters, sum } from '~/utils/helpers';

describe('Helper functions', () => {
  it('returns the sum of two numbers', () => {
    expect(sum(1, 2)).toEqual(3);
    expect(sum(-1, 1)).toEqual(0);
    expect(sum(0, 0)).toEqual(0);
  });

  test('should convert numbers to letters correctly', () => {
    expect(numToLetters(1)).toBe('A');
    expect(numToLetters(5)).toBe('E');
    expect(numToLetters(26)).toBe('Z');
    expect(numToLetters(30)).toBe(null);
  });
});

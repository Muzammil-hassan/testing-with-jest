import { act, renderHook } from '@testing-library/react';
import useCounter from '~/hooks/useCounter';

describe('useCounter', () => {
  test('should initialize count to 0', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toBe(0);
  });

  test('should increment count', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  test('should decrement count', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(-1);
  });
});

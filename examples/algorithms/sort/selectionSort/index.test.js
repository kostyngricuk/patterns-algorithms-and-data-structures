import { describe, expect, test } from '@jest/globals';
import selectionSort from './index';

describe('selectionSort', () => {
  test('should sort an unsorted array in ascending order', () => {
    const arr = [64, 25, 12, 22, 11];
    const expected = [11, 12, 22, 25, 64];
    expect(selectionSort(arr)).toEqual(expected);
  });

  test('should handle an already sorted array', () => {
    const arr = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    expect(selectionSort(arr)).toEqual(expected);
  });

  test('should handle an array with duplicate elements', () => {
    const arr = [5, 2, 8, 2, 9, 1, 5];
    const expected = [1, 2, 2, 5, 5, 8, 9];
    expect(selectionSort(arr)).toEqual(expected);
  });

  test('should handle an empty array', () => {
    const arr = [];
    expect(selectionSort(arr)).toEqual([]);
  });

  test('should handle a single element array', () => {
    const arr = [42];
    expect(selectionSort(arr)).toEqual([42]);
  });

  test('should handle a reverse sorted array', () => {
    const arr = [5, 4, 3, 2, 1];
    const expected = [1, 2, 3, 4, 5];
    expect(selectionSort(arr)).toEqual(expected);
  });

  test('should not mutate the original array', () => {
    const arr = [3, 1, 4, 1, 5];
    const original = [...arr];
    selectionSort(arr);
    expect(arr).toEqual(original);
  });
});

import { describe, expect, test } from '@jest/globals';
import mergeSort from './index';

describe('mergeSort', () => {
  test('should sort an unsorted array in ascending order', () => {
    const arr = [64, 34, 25, 12, 22, 11, 90];
    const expected = [11, 12, 22, 25, 34, 64, 90];
    expect(mergeSort(arr)).toEqual(expected);
  });

  test('should handle an already sorted array', () => {
    const arr = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    expect(mergeSort(arr)).toEqual(expected);
  });

  test('should handle an array with duplicate elements', () => {
    const arr = [5, 2, 8, 2, 9, 1, 5];
    const expected = [1, 2, 2, 5, 5, 8, 9];
    expect(mergeSort(arr)).toEqual(expected);
  });

  test('should handle a reverse sorted array', () => {
    const arr = [5, 4, 3, 2, 1];
    const expected = [1, 2, 3, 4, 5];
    expect(mergeSort(arr)).toEqual(expected);
  });

  test('should handle an empty array', () => {
    const arr = [];
    expect(mergeSort(arr)).toEqual([]);
  });

  test('should handle a single element array', () => {
    const arr = [42];
    expect(mergeSort(arr)).toEqual([42]);
  });

  test('should handle an array with two elements', () => {
    const arr = [2, 1];
    const expected = [1, 2];
    expect(mergeSort(arr)).toEqual(expected);
  });

  test('should handle large arrays efficiently', () => {
    const arr = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
    const expected = [...arr].sort((a, b) => a - b);
    expect(mergeSort(arr)).toEqual(expected);
  });

  test('should not mutate the original array', () => {
    const arr = [3, 1, 4, 1, 5];
    const original = [...arr];
    mergeSort(arr);
    expect(arr).toEqual(original);
  });
});

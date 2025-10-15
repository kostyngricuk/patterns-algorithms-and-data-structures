# Bubble Sort

Bubble sort is one of the simplest sorting algorithms. It works by repeatedly stepping through the list, comparing adjacent elements and swapping them if they are in the wrong order. The algorithm gets its name because smaller elements "bubble" to the beginning of the list, just like air bubbles rise to the surface of water.

## Algorithm Description

Bubble sort works by making multiple passes through the array:

1. Compare each pair of adjacent elements
2. If they are in the wrong order (left > right), swap them
3. Continue through the entire array
4. Repeat the process until no swaps are needed
5. The algorithm includes an optimization: if no swaps occur during a pass, the array is already sorted

After each complete pass, the largest unsorted element "bubbles up" to its correct position at the end of the array.

## Time and Space Complexity

- **Time Complexity:**
  - Best Case: O(n) - when the array is already sorted (with optimization)
  - Average Case: O(n²) - typical case with random data
  - Worst Case: O(n²) - when the array is sorted in reverse order
- **Space Complexity:** O(1) - uses constant extra space (in-place sorting)

## Implementation

View the [bubble sort implementation](https://github.com/kostyngricuk/patterns-algorithms-and-data-structures/blob/master/examples/algorithms/sort/bubbleSort/index.js) on GitHub.

```js
const bubbleSort = (arr) => {
  const result = [...arr]; // Create a copy to avoid mutating the original array
  const n = result.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    
    for (let j = 0; j < n - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        // Swap elements
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
        swapped = true;
      }
    }
    
    // If no swapping occurred, array is already sorted
    if (!swapped) {
      break;
    }
  }

  return result;
};

export default bubbleSort;
```

## Test Cases

View the [bubble sort tests](https://github.com/kostyngricuk/patterns-algorithms-and-data-structures/blob/master/examples/algorithms/sort/bubbleSort/index.test.js) on GitHub.

The implementation includes comprehensive test cases that verify:

1. **Sorting unsorted arrays:** Correctly sorts random unsorted data

   ```js
   const arr = [64, 34, 25, 12, 22, 11, 90];
   bubbleSort(arr); // Returns [11, 12, 22, 25, 34, 64, 90]
   ```

2. **Handling already sorted arrays:** Efficiently processes sorted data with O(n) performance

   ```js
   const arr = [1, 2, 3, 4, 5];
   bubbleSort(arr); // Returns [1, 2, 3, 4, 5]
   ```

3. **Managing duplicate elements:** Correctly handles arrays with repeated values

   ```js
   const arr = [5, 2, 8, 2, 9, 1, 5];
   bubbleSort(arr); // Returns [1, 2, 2, 5, 5, 8, 9]
   ```

4. **Edge cases:** Handles empty arrays and single-element arrays

   ```js
   bubbleSort([]); // Returns []
   bubbleSort([42]); // Returns [42]
   ```

5. **Non-destructive sorting:** Does not mutate the original array

## When to Use Bubble Sort

Bubble sort is appropriate when:

- The dataset is very small (< 10 elements)
- Educational purposes or teaching sorting concepts
- Simplicity is more important than performance
- The array is likely to be already sorted or nearly sorted
- Memory is extremely limited

## Advantages and Disadvantages

**Advantages:**

- Very simple to understand and implement
- In-place sorting (O(1) space complexity)
- Stable sorting algorithm (maintains relative order of equal elements)
- Adaptive (performs better on partially sorted arrays)
- No additional memory requirements

**Disadvantages:**

- Inefficient for large datasets O(n²)
- More comparisons and swaps than other simple algorithms
- Generally outperformed by other O(n²) algorithms like insertion sort
- Not practical for production use with large datasets

## Visualization

The algorithm can be visualized as:

- Pass 1: Largest element bubbles to the end
- Pass 2: Second largest element bubbles to the second-to-last position
- Pass 3: Third largest element bubbles to its position
- And so on...

Each pass guarantees that at least one more element is in its final sorted position.

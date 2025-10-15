# Selection Sort

Selection sort is a simple comparison-based sorting algorithm. It works by dividing the array into two parts: a sorted portion at the beginning and an unsorted portion at the end. The algorithm repeatedly finds the minimum element from the unsorted portion and swaps it with the first element of the unsorted portion.

## Algorithm Description

Selection sort works by maintaining two subarrays:

1. **Sorted subarray:** Initially empty, grows from left to right
2. **Unsorted subarray:** Initially the entire array, shrinks from left to right

The algorithm process:

1. Find the minimum element in the unsorted subarray
2. Swap it with the first element of the unsorted subarray
3. Move the boundary between sorted and unsorted subarrays one position to the right
4. Repeat until the entire array is sorted

## Time and Space Complexity

- **Time Complexity:**
  - Best Case: O(n²) - even if the array is already sorted
  - Average Case: O(n²) - typical case with random data
  - Worst Case: O(n²) - consistently quadratic regardless of input
- **Space Complexity:** O(1) - uses constant extra space (in-place sorting)

## Implementation

View the [selection sort implementation](https://github.com/kostyngricuk/patterns-algorithms-and-data-structures/blob/master/examples/algorithms/sort/selectionSort/index.js) on GitHub.

```js
const selectionSort = (arr) => {
  const result = [...arr]; // Create a copy to avoid mutating the original array
  const n = result.length;

  for (let i = 0; i < n - 1; i++) {
    // Find the minimum element in the remaining unsorted array
    let minIndex = i;
    
    for (let j = i + 1; j < n; j++) {
      if (result[j] < result[minIndex]) {
        minIndex = j;
      }
    }
    
    // Swap the found minimum element with the first element
    if (minIndex !== i) {
      [result[i], result[minIndex]] = [result[minIndex], result[i]];
    }
  }

  return result;
};

export default selectionSort;
```

## Test Cases

View the [selection sort tests](https://github.com/kostyngricuk/patterns-algorithms-and-data-structures/blob/master/examples/algorithms/sort/selectionSort/index.test.js) on GitHub.

The implementation includes comprehensive test cases that verify:

1. **Sorting unsorted arrays:** Correctly sorts random unsorted data

   ```js
   const arr = [64, 25, 12, 22, 11];
   selectionSort(arr); // Returns [11, 12, 22, 25, 64]
   ```

2. **Handling already sorted arrays:** Processes sorted data (still O(n²))

   ```js
   const arr = [1, 2, 3, 4, 5];
   selectionSort(arr); // Returns [1, 2, 3, 4, 5]
   ```

3. **Managing duplicate elements:** Correctly handles arrays with repeated values

   ```js
   const arr = [5, 2, 8, 2, 9, 1, 5];
   selectionSort(arr); // Returns [1, 2, 2, 5, 5, 8, 9]
   ```

4. **Handling reverse sorted arrays:** Efficiently sorts arrays in reverse order

   ```js
   const arr = [5, 4, 3, 2, 1];
   selectionSort(arr); // Returns [1, 2, 3, 4, 5]
   ```

5. **Edge cases:** Handles empty arrays and single-element arrays

   ```js
   selectionSort([]); // Returns []
   selectionSort([42]); // Returns [42]
   ```

6. **Non-destructive sorting:** Does not mutate the original array

## When to Use Selection Sort

Selection sort is appropriate when:

- The dataset is small (< 20 elements)
- Memory writes are expensive (minimizes the number of swaps)
- Simplicity is preferred over performance
- You need a stable in-place sorting algorithm
- Educational purposes or algorithm learning

## Advantages and Disadvantages

**Advantages:**

- Simple to understand and implement
- In-place sorting (O(1) space complexity)
- Minimizes the number of swaps (at most n-1 swaps)
- Performs well on small datasets
- No additional memory requirements
- Not affected by the initial order of elements

**Disadvantages:**

- Inefficient for large datasets O(n²)
- Not adaptive (doesn't perform better on partially sorted arrays)
- Not stable (can change the relative order of equal elements)
- Makes O(n²) comparisons even when the array is already sorted
- Generally outperformed by other algorithms like insertion sort

## Visualization

The algorithm can be visualized as:

- **Pass 1:** Find minimum in entire array, place at position 0
- **Pass 2:** Find minimum in positions 1 to n-1, place at position 1
- **Pass 3:** Find minimum in positions 2 to n-1, place at position 2
- **And so on...**

After each pass, one more element is in its final sorted position at the beginning of the array.

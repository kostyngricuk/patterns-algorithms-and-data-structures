# Binary Search

Binary search is an efficient searching algorithm that finds the position of a target value within a **sorted** array. It works by repeatedly dividing the search interval in half, comparing the target with the middle element, and eliminating half of the remaining elements at each step.

## Algorithm Description

Binary search works by maintaining two pointers (minIndex and maxIndex) that define the current search range. The algorithm:

1. Calculates the middle index of the current range
2. Compares the middle element with the target
3. If they match, returns the index
4. If the middle element is less than the target, searches the right half
5. If the middle element is greater than the target, searches the left half
6. Repeats until the target is found or the search range is exhausted

**Important:** Binary search only works on sorted arrays.

## Time and Space Complexity

- **Time Complexity:**
  - Best Case: O(1) - when the target is the middle element
  - Average Case: O(log n) - logarithmic time complexity
  - Worst Case: O(log n) - when the target is not present or at the extremes
- **Space Complexity:** O(1) - uses constant extra space (iterative implementation)

## Implementation

View the [binary search implementation](https://github.com/kostyngricuk/patterns-algorithms-and-data-structures/blob/master/examples/algorithms/search/binarySearch/index.js) on GitHub.

```js
// arr - should be sorted array
const binarySearch = (arr, target) => {
  let minIndex = 0;
  let maxIndex = arr.length - 1;

  while (minIndex <= maxIndex) {
    const midIndex = Math.floor((minIndex + maxIndex) / 2);
    if (arr[midIndex] === target) {
      return midIndex;
    }

    if (arr[midIndex] < target) {
      minIndex = midIndex + 1;
    }
    if (arr[midIndex] > target) {
      maxIndex = midIndex - 1;
    }
  }

  return -1;
}

export default binarySearch;
```

## Test Cases

View the [binary search tests](https://github.com/kostyngricuk/patterns-algorithms-and-data-structures/blob/master/examples/algorithms/search/binarySearch/index.test.js) on GitHub.

The implementation includes comprehensive test cases that verify:

1. **Finding existing elements in sorted arrays:** Returns the correct index when the target element exists

   ```js
   const arr = [1, 2, 3, 4, 5]; // sorted array
   binarySearch(arr, 3); // Returns 2
   binarySearch(arr, 4); // Returns 3
   ```

2. **Handling non-existent elements:** Returns -1 when the target element is not found

   ```js
   const arr = [1, 2, 3, 4, 5];
   binarySearch(arr, 6); // Returns -1
   ```

3. **Handling unsorted arrays:** Returns -1 for unsorted arrays (requirement not met)

   ```js
   const arr = [3, 4, 5, 1, 2]; // unsorted array
   binarySearch(arr, 1); // Returns -1 (even though 1 exists)
   ```

## When to Use Binary Search

Binary search is appropriate when:

- The array is sorted (prerequisite)
- You need to perform multiple searches on the same dataset
- The dataset is large (significant performance improvement over linear search)
- Memory usage is not a primary concern for preprocessing
- Fast search time is critical

## Advantages and Disadvantages

**Advantages:**

- Very efficient for large sorted datasets O(log n)
- Predictable performance characteristics
- Simple to understand and implement
- Much faster than linear search for large arrays

**Disadvantages:**

- Requires the array to be sorted (preprocessing overhead)
- Only works on sorted data structures
- More complex than linear search
- Requires random access to elements (not suitable for linked lists)

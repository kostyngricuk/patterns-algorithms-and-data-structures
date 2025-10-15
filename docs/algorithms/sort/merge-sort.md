# Merge Sort

Merge sort is a stable, comparison-based divide-and-conquer sorting algorithm. It works by recursively dividing the array into two halves, sorting each half, and then merging the sorted halves back together. It's known for its consistent O(n log n) performance regardless of the input data.

## Algorithm Description

Merge sort follows the divide-and-conquer paradigm:

1. **Divide:** Split the array into two halves at the middle point
2. **Conquer:** Recursively sort both halves
3. **Combine:** Merge the two sorted halves into a single sorted array

The key operation is the merge step, which combines two already sorted arrays into one sorted array by comparing elements and selecting the smaller one at each step.

**Base Case:** Arrays with 0 or 1 elements are considered already sorted.

## Time and Space Complexity

- **Time Complexity:**
  - Best Case: O(n log n) - consistent performance
  - Average Case: O(n log n) - consistent performance  
  - Worst Case: O(n log n) - consistent performance
- **Space Complexity:** O(n) - requires additional space for temporary arrays during merging

## Implementation

View the [merge sort implementation](https://github.com/kostyngricuk/patterns-algorithms-and-data-structures/blob/master/examples/algorithms/sort/mergeSort/index.js) on GitHub.

```js
const mergeSort = (arr) => {
  // Base case: arrays with 0 or 1 element are already sorted
  if (arr.length <= 1) {
    return [...arr];
  }
  
  // Divide the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  
  // Recursively sort both halves and merge them
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  // Compare elements from left and right arrays and merge in ascending order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
  // Add remaining elements from left array (if any)
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }
  
  // Add remaining elements from right array (if any)
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }
  
  return result;
};

export default mergeSort;
```

## Test Cases

View the [merge sort tests](https://github.com/kostyngricuk/patterns-algorithms-and-data-structures/blob/master/examples/algorithms/sort/mergeSort/index.test.js) on GitHub.

The implementation includes comprehensive test cases that verify:

1. **Sorting unsorted arrays:** Correctly sorts random unsorted data

   ```js
   const arr = [64, 34, 25, 12, 22, 11, 90];
   mergeSort(arr); // Returns [11, 12, 22, 25, 34, 64, 90]
   ```

2. **Handling already sorted arrays:** Maintains efficiency on sorted data

   ```js
   const arr = [1, 2, 3, 4, 5];
   mergeSort(arr); // Returns [1, 2, 3, 4, 5]
   ```

3. **Managing duplicate elements:** Correctly handles arrays with repeated values (stable sort)

   ```js
   const arr = [5, 2, 8, 2, 9, 1, 5];
   mergeSort(arr); // Returns [1, 2, 2, 5, 5, 8, 9]
   ```

4. **Handling reverse sorted arrays:** Efficiently sorts arrays in reverse order

   ```js
   const arr = [5, 4, 3, 2, 1];
   mergeSort(arr); // Returns [1, 2, 3, 4, 5]
   ```

5. **Edge cases:** Handles empty arrays, single elements, and two elements

   ```js
   mergeSort([]); // Returns []
   mergeSort([42]); // Returns [42]
   mergeSort([2, 1]); // Returns [1, 2]
   ```

6. **Large arrays:** Efficiently handles large datasets with consistent performance

7. **Non-destructive sorting:** Does not mutate the original array

## When to Use Merge Sort

Merge sort is appropriate when:

- You need guaranteed O(n log n) performance
- Stability is required (preserving relative order of equal elements)
- You're working with large datasets
- Consistent performance is more important than memory usage
- You need predictable behavior regardless of input characteristics
- External sorting is needed (sorting data that doesn't fit in memory)

## Advantages and Disadvantages

**Advantages:**

- Guaranteed O(n log n) time complexity in all cases
- Stable sorting algorithm (maintains relative order of equal elements)
- Predictable performance regardless of input data
- Well-suited for linked lists (can be implemented with O(1) space for lists)
- Excellent for external sorting (large datasets)
- Parallelizable (can sort subarrays in parallel)

**Disadvantages:**

- Requires O(n) additional space for temporary arrays
- Not in-place (uses extra memory)
- Slower than quick sort on average due to higher constant factors
- Not adaptive (doesn't benefit from partially sorted data)
- More complex than simple algorithms like bubble sort or selection sort

## Visualization

The algorithm can be visualized as a binary tree:

- **Divide phase:** Split arrays in half recursively (top-down)
- **Merge phase:** Combine sorted subarrays (bottom-up)
- **Tree depth:** log n levels
- **Work per level:** O(n) comparisons and merges

Each level of the recursion tree processes all n elements, and there are log n levels, resulting in O(n log n) total work.

## Variations

- **Bottom-up merge sort:** Iterative implementation that avoids recursion
- **Natural merge sort:** Takes advantage of existing runs (sorted subsequences)
- **In-place merge sort:** Attempts to reduce space complexity (complex to implement)
- **Multi-way merge sort:** Divides into more than two parts for better cache performance

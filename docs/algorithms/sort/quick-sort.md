# Quick Sort

Quick sort is a highly efficient divide-and-conquer sorting algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two subarrays according to whether they are less than or greater than the pivot. The subarrays are then sorted recursively.

## Algorithm Description

Quick sort follows the divide-and-conquer approach:

1. **Choose a pivot:** Select an element from the array (commonly the last element)
2. **Partition:** Rearrange the array so that:
   - Elements smaller than the pivot come before it
   - Elements greater than the pivot come after it
   - The pivot is now in its final sorted position
3. **Divide:** Recursively apply quick sort to the subarrays on either side of the pivot
4. **Conquer:** The base case is when the subarray has 0 or 1 elements (already sorted)

The partitioning step is crucial and determines the algorithm's efficiency.

## Time and Space Complexity

- **Time Complexity:**
  - Best Case: O(n log n) - when the pivot divides the array into equal halves
  - Average Case: O(n log n) - with random pivot selection
  - Worst Case: O(n²) - when the pivot is always the smallest or largest element
- **Space Complexity:**
  - Best/Average Case: O(log n) - due to recursion stack
  - Worst Case: O(n) - when the recursion depth reaches n

## Implementation

View the [quick sort implementation](https://github.com/kostyngricuk/patterns-algorithms-and-data-structures/blob/master/examples/algorithms/sort/quickSort/index.js) on GitHub.

```js
const quickSort = (arr) => {
  // Create a copy to avoid mutating the original array
  const result = [...arr];
  
  const quickSortHelper = (array, low, high) => {
    if (low < high) {
      // Partition the array and get the pivot index
      const pivotIndex = partition(array, low, high);
      
      // Recursively sort elements before and after partition
      quickSortHelper(array, low, pivotIndex - 1);
      quickSortHelper(array, pivotIndex + 1, high);
    }
  };
  
  const partition = (array, low, high) => {
    // Choose the rightmost element as pivot
    const pivot = array[high];
    let i = low - 1; // Index of smaller element
    
    for (let j = low; j < high; j++) {
      // If current element is smaller than or equal to pivot
      if (array[j] <= pivot) {
        i++;
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    
    // Place pivot in correct position
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1;
  };
  
  quickSortHelper(result, 0, result.length - 1);
  return result;
};

export default quickSort;
```

## Test Cases

View the [quick sort tests](https://github.com/kostyngricuk/patterns-algorithms-and-data-structures/blob/master/examples/algorithms/sort/quickSort/index.test.js) on GitHub.

The implementation includes comprehensive test cases that verify:

1. **Sorting unsorted arrays:** Correctly sorts random unsorted data

   ```js
   const arr = [64, 34, 25, 12, 22, 11, 90];
   quickSort(arr); // Returns [11, 12, 22, 25, 34, 64, 90]
   ```

2. **Handling already sorted arrays:** Processes sorted data efficiently

   ```js
   const arr = [1, 2, 3, 4, 5];
   quickSort(arr); // Returns [1, 2, 3, 4, 5]
   ```

3. **Managing duplicate elements:** Correctly handles arrays with repeated values

   ```js
   const arr = [5, 2, 8, 2, 9, 1, 5];
   quickSort(arr); // Returns [1, 2, 2, 5, 5, 8, 9]
   ```

4. **Handling reverse sorted arrays:** Efficiently sorts arrays in reverse order

   ```js
   const arr = [5, 4, 3, 2, 1];
   quickSort(arr); // Returns [1, 2, 3, 4, 5]
   ```

5. **Edge cases:** Handles empty arrays, single elements, and two elements

   ```js
   quickSort([]); // Returns []
   quickSort([42]); // Returns [42]
   quickSort([2, 1]); // Returns [1, 2]
   ```

6. **Non-destructive sorting:** Does not mutate the original array

## When to Use Quick Sort

Quick sort is appropriate when:

- You need efficient general-purpose sorting (average O(n log n))
- Memory usage should be minimal (in-place sorting possible)
- The dataset is large and performance is critical
- You can implement optimizations like randomized pivot selection
- Stability is not required (quick sort is not stable)

## Advantages and Disadvantages

**Advantages:**

- Very efficient average-case performance O(n log n)
- In-place sorting possible (though this implementation creates a copy)
- Good cache performance due to locality of reference
- Widely used and well-understood
- Can be optimized with various pivot selection strategies
- Performs well on most real-world data

**Disadvantages:**

- Worst-case time complexity is O(n²)  
- Not stable (can change relative order of equal elements)
- Performance depends heavily on pivot selection
- Can have poor performance on already sorted data (with naive pivot)
- Recursive implementation uses O(log n) to O(n) stack space

## Pivot Selection Strategies

Different pivot selection methods affect performance:

- **Last element** (used in this implementation): Simple but can be inefficient
- **First element**: Similar issues as last element
- **Random element**: Better average performance, avoids worst-case on sorted data
- **Median-of-three**: Choose median of first, middle, and last elements
- **Median-of-medians**: Guarantees O(n log n) time complexity

## Optimization Techniques

- **Hybrid approach**: Switch to insertion sort for small subarrays (< 10 elements)
- **Three-way partitioning**: Handle duplicate elements more efficiently
- **Iterative implementation**: Reduce space complexity by avoiding recursion
- **Tail recursion optimization**: Optimize the recursive calls

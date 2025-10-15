# Linear Search

Linear search is a simple searching algorithm that finds the position of a target value within an array. It sequentially checks each element of the array until a match is found or the entire array has been searched.

## Algorithm Description

Linear search works by examining each element in the array one by one, starting from the first element, until either:

- The target element is found (returns the index)
- The end of the array is reached without finding the target (returns -1)

## Time and Space Complexity

- **Time Complexity:**
  - Best Case: O(1) - when the target is the first element
  - Average Case: O(n) - when the target is in the middle
  - Worst Case: O(n) - when the target is the last element or not present
- **Space Complexity:** O(1) - uses constant extra space

## Implementation

View the [linear search implementation](https://github.com/kostyngricuk/patterns-algorithms-and-data-structures/blob/master/examples/algorithms/search/linearSearch/index.js) on GitHub.

```js
const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
};

export default linearSearch;
```

## Test Cases

View the [linear search tests](https://github.com/kostyngricuk/patterns-algorithms-and-data-structures/blob/master/examples/algorithms/search/linearSearch/index.test.js) on GitHub.

The implementation includes comprehensive test cases that verify:

1. **Finding existing elements:** Returns the correct index when the target element exists in the array

   ```js
   const arr = [1, 2, 3, 4, 5];
   linearSearch(arr, 3); // Returns 2
   linearSearch(arr, 4); // Returns 3
   ```

2. **Handling non-existent elements:** Returns -1 when the target element is not found

   ```js
   const arr = [1, 2, 3, 4, 5];
   linearSearch(arr, 6); // Returns -1
   ```

## Use Cases

Linear search is useful when:

- The array is small (overhead of more complex algorithms isn't justified)
- The array is unsorted (binary search requires sorted data)
- You need to search only once (not worth sorting first)
- Memory is extremely limited
- The data structure doesn't support random access (e.g., linked lists)

Common applications include:

- Searching in small lists
- Finding elements in unsorted arrays
- One-time searches where sorting overhead isn't justified

## Advantages and Disadvantages

**Advantages:**

- Simple to understand and implement
- Works on unsorted arrays
- Requires minimal memory
- No preprocessing required

**Disadvantages:**

- Inefficient for large datasets
- Time complexity is linear O(n)

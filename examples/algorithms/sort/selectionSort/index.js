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

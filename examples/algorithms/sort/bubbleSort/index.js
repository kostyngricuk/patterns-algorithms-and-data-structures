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

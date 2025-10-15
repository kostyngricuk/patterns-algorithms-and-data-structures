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

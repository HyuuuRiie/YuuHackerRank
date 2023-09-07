function miniMaxSum(arr) {
  // Sort the array to take the smallest and largest values
  arr.sort((a, b) => a - b);

  // Calculates the total of all array elements
  const total = arr.reduce((acc, curr) => acc + curr, 0);

  // Computes the minimum sum by subtracting the largest element
  const minSum = total - arr[arr.length - 1];

  // Computes the maximum sum by subtracting the smallest element
  const maxSum = total - arr[0];

  // Print the minimum and maximum results
  console.log(minSum, maxSum);
}
const arr = [1, 2, 3, 4, 5]; //Replace with your own input
miniMaxSum(arr);

// @hyuuue_11
// More Solution Visit https://github.com/HyuuuRiie

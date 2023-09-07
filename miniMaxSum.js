function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);
  const total = arr.reduce((acc, curr) => acc + curr, 0);
  const minSum = total - arr[arr.length - 1];
  const maxSum = total - arr[0];
  console.log(minSum, maxSum);
}
const arr = [1, 2, 3, 4, 5];
miniMaxSum(arr);

// @hyuuue_11
// More Solution Visit : https://github.com/HyuuuRiie/YuHackerRank

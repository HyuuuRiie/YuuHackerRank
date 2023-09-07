function simpleArraySum(ar) {
  // Initialize a variable to store the sum
  let sum = 0;

  // Loop through the array and add each element to the sum
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }

  // Return the final sum
  return sum;
}

const array = [1, 2, 3, 4, 10, 11];
const result = simpleArraySum(array);
console.log(result);

// @hyuuue_11
// More Solution Visit https://github.com/HyuuuRiie

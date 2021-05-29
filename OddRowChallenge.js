// Given the triangle of consecutive odd numbers:

//             1
//          3     5
//       7     9    11
//   13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.:

// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8

function rowSumOddNumbers(n) {
    // TODO
  let value = 1;
  for(let x=0; x<n; x++) {
    value +=2*x
  }
  value= value*n
  for(let x=0; x<n; x++){
    value += 2*x}
  return value
}



// or Simply
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

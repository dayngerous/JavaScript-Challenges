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

// Best practice
var n = function(digit) {
  return function(op) {
    return op ? op(digit) : digit;
  }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function(l) { return l + r; }; }
function minus(r) { return function(l) { return l - r; }; }
function times(r) { return function(l) { return l * r; }; }
function dividedBy(r) { return function(l) { return l / r; }; }

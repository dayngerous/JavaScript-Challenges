//This time we want to write calculations using functions and get the results. Let's have a look at some examples:

//seven(times(five())); // must return 35
//four(plus(nine())); // must return 13
//eight(minus(three())); // must return 5
//six(dividedBy(two())); // must return 3
//Requirements:

//There must be a function for each number from 0 ("zero") to 9 ("nine")
//There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
//Each calculation consist of exactly one operation and two numbers
//The most outer function represents the left operand, the most inner function represents the right operand
//Division should be integer division. For example, this should return 2, not 2.666666...:
//eight(dividedBy(three()));

function zero(func) {
  if (func instanceof Function) {
    return func(0)
  } else
    return 0
}
function one(func) {
  if (func instanceof Function) {
    return func(1)
  } else
    return 1
}
function two(func) {
  if (func instanceof Function) {
    return func(2)
  } else
    return 2
}
function three(func) {
  if (func instanceof Function) {
    return func(3)
  } else
    return 3
}
function four(func) {
  if (func instanceof Function) {
    return func(4)
  } else
    return 4
}
function five(func) {
  if (func instanceof Function) {
    return func(5)
  } else
    return 5
}
function six(func) {
  if (func instanceof Function) {
    return func(6)
  } else
    return 6
}
function seven(func) {
  if (func instanceof Function) {
    return func(7)
  } else
    return 7
}
function eight(func) {
  if (func instanceof Function) {
    return func(8)
  } else
    return 8
}
function nine(func) {
  if (func instanceof Function) {
    return func(9)
  } else
    return 9
}

function plus(a) {
  return function(b) {
    return a+b
  }
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
function minus(a) {
  return function(b) {
    return b-a
  }
}
function times(a) {
  return function(b) {
    return a*b
  }
}
function dividedBy(a) {
  return function(b) {
    return Math.floor(b/a)
  }
}

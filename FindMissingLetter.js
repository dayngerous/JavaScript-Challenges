//Find the missing letter

//Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

//You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
//The array will always contain letters in only one case.

//Example:

//['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

//["a","b","c","d","f"] -> "e"
//["O","Q","R","S"] -> "P"
//(Use the English alphabet with 26 letters!)

//Have fun coding it and please don't forget to vote and rank this kata! :-)

//I have also created other katas. Take a look if you enjoyed this kata!

// My Solution 
function findMissingLetter(array)
{ const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const upperalph = alphabets.map(alphabet =>(alphabet.toUpperCase()))
  for (let x = 0; x<alphabets.length;x++) {
    if (alphabets[x]== array[0])
      var first = x
    if (upperalph[x] == array[0])
      var firstUpper = x
  } 
  var slice = []
  for (let x = first; x<(first+array.length); x++) {
      slice.push(alphabets[x])}
 if (first !== undefined) {
    for (let x in slice) {
      if (array.indexOf(slice[parseInt(x)])==-1) {
        return slice[parseInt(x)]
      }
    }
   }
   for (let x = firstUpper; x<(firstUpper+array.length); x++) {
      slice.push(upperalph[x])}
 if (firstUpper !== undefined) {
    for (let x in slice) {
      if (array.indexOf(slice[parseInt(x)])==-1) {
        return slice[parseInt(x)]
      }
    }
   }
}

// Better 
function findMissingLetter(array)
{
   var i=array[0].charCodeAt();
   array.map(x=>  x.charCodeAt()==i?i++:i);
   return String.fromCharCode(i);
}

// Other 
const findMissingLetter = (array) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const start = alphabet.indexOf(array[0]);
  return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
};

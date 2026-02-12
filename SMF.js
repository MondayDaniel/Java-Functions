/**          String Manipulation Functions
 
 * // Reverse String: Write a function that reverses a given string.

 * // Count Characters: Create a function that counts the number of characters in a 
   // string.

 * // capitalize Words: Implement a function that capitalizes the first letter of each
   //  word in a sentence.
 */

 // Declaration of themes/var
 const sentence = "string manipulation functions";
let characters = sentence;
let string = characters;
let cWords = capitalize(sentence);

// Reverse String: 
  function reverse(str) {
    return str.split('').reverse().join('')
  }
  console.log(`Reverse string of '${(sentence)}' is = ${reverse(string)}`);

//  Count Characters:
 let lengthcount = characters.length
 console.log(`The number of characters are`, lengthcount);

// capitalize Words:
function capitalize(sentence) {
  return sentence.split(' ').map(word => {
    if (word.length === 0) return '';
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}
console.log(`first letters capitalization of "${(sentence)}" =`, cWords);// 

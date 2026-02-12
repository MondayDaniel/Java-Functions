/**          Array Functions
 
 * // Find Maximum and Minimum: Write functions to find the maximum and minimum 
 // values in an array of numbers.

 * // Sum of Array: Create a function that calculates the sum of all elements in an
   // array.

 * // Filter Array: Implement a function that filters out elements from an array based 
   // on a given condition.
 */

 //   Declaration of themes/var
 const numbers = [10, 8, 6, 50, 12, 5];
 let fMax = findMax(numbers);
  let fMin = findMin(numbers);
 let fMaxLoop = findMaxLoop(numbers);
  let fMinLoop = findMinLoop(numbers);
  const greaterThan = (num) => num > 10;

  // Find Maximum and Minimum:
  // 1 built in
  //   max
  function findMax(arr) {
    return Math.max(...arr);
  }
  //  min
  function findMin(arr) {
    return Math.min(...arr);
  }
  console.log('Minimum value (built-in):', fMin);
   console.log(`Maximum value (built-in):`, (fMax));

   // 2 loop 
   // Maximum
   function findMaxLoop(arr) {
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
   }
   // Minimum
    function findMinLoop(arr) {
    let min = arr[0]
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
   }
    console.log("Maximum value (loop):",fMaxLoop);
    console.log('Minimum value(loop):',fMinLoop);
  
  // Sum of Array:
    function arraySum(arr) {
      let total = 0;
      for (let i = 0; i < arr.length; i ++) {
        total += arr[i];
      }
      return total;
    }
    console.log('THE Sum of this array =', arraySum(numbers));

  // Filter Array:
    function filterA(arr, conditionFn) {
      let filtered = [];
      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (conditionFn(element)) {
          filtered.push(element);
        }
      }
      return filtered;
    }
 console.log(`Elements ${(greaterThan)} =`, filterA(numbers, greaterThan));
 
    
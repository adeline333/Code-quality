/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

//FUNCTION 1
// export default function countR(word="") {
//   var count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === "R") {
//       count++;
//     }
//   }
//   return count;
// }

export default function countR(word = "") {
  return word.split('').filter(character => character === "R").length
}
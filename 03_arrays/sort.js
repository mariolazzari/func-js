const numbers = [10, 4, 5, 1, 3, 2, 9, 8, 7, 6];

let sorted = numbers.slice().sort();
console.log("Default sort", sorted);

// comparator
// const numAsc = (a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a < b) {
//     return -1;
//   } else {
//     return 0;
//   }
// };

const numAsc = (a, b) => a - b;
const numDesc = (a, b) => b - a;

sorted = numbers.slice().sort(numAsc);
console.log("Ascending numerical sort", sorted);
sorted = numbers.slice().sort(numDesc);
console.log("Descending numerical sort", sorted);

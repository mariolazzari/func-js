const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const from2to5 = numbers.slice(2, 5);
console.log("From 2 to 5", from2to5);

const from2 = numbers.slice(2);
console.log("From 2", from2to5);

const all = numbers.slice();
console.log("All", all);

const sorted = numbers.slice().sort();
console.log("Sorted", numbers, sorted);

const reversed = numbers.slice().reverse();
console.log("Reversed", numbers, reversed);

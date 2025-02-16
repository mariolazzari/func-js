const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let even = [];
for (const n of numbers) {
  if (n % 2 === 0) {
    even.push(n);
  }
}
console.log("Even", even);

const isEven = n => n % 2 === 0; // predicate

even = numbers.filter(n => n % 2 === 0); // anonymous
console.log("Even", even);

even = numbers.filter(isEven);
console.log("Even", even);

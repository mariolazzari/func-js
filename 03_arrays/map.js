const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let doubles = [];

for (const n of numbers) {
  const double = 2 * n;
  doubles.push(double);
}
console.log(numbers, doubles);

const double = x => 2 * x;

doubles = numbers.map(n => 2 * n); // anonymous function
console.log(numbers, doubles);

doubles = numbers.map(double); // declarative
console.log(numbers, doubles);

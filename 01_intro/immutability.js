const x = 5;
// x = "a" -> error

const numbers = [1, 2, 3, 4, 5];
// numbers = ["a"] -> error

numbers[0] = 0; // valid
numbers.reverse(); // mutate

const person = {
  name: "Mario",
  age: 50,
};

// person = {} // error
person.age = 35; // valid

const person = {
  name: "Mario",
  age: 49,
};

const carrer = {
  name: "Mario Lazzari", // duplicated key: last wins
  title: "Developer",
  salary: 100000,
};

// const personCareer = {};
// for (const key in person) {
//   personCareer[key] = person[key];
// }

// merge objects
const personCareer = {
  ...person,
  ...carrer,
  isAdmin: false, // new key
};
console.log(personCareer);

// push mutates original array
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);

const updatedNumbers = [0, ...numbers, 7];
console.log(updatedNumbers);

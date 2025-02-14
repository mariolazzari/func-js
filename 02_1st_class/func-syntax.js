function myFunction(arg1, arg2) {
  // my function hoisted
  return arg1 + arg2;
}

const myFunction = function (arg1, arg2) {
  // my function
  return arg1 + arg2;
};

// const add = (arg1, arg2) => {
//   const sum = arg1 + arg2;
//   return sum;
// };

const add = (arg1, arg2) => arg1 + arg2;
const double = num => 2 * num;
const twoPlusThress = () => 2 + 3;

const createPerson = () => ({
  name: "Mario",
  age: 50,
});

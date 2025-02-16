const createPrinter = () => () => console.log("return func");
// function createPrinter() {
//   return function () {
//     console.log("return func");
//   };
// }

// with nema
const printer = createPrinter(); // () => console.log
printer();

// without name
createPrinter()(); // console.log

// multplier family
const double = n => 2 * n;
const triple = n => 3 * n;
const quadruple = n => 4 * n;

const N = 10;
const funcs = [double, triple, quadruple];
funcs.forEach(func => console.log(func(N)));

// generic mulpiplier
const mult = m => n => m * n;

const doubleM = mult(2);
const tripleM = mult(3);
const quadrupleM = mult(4);
funcs.forEach(func => console.log(func(N)));

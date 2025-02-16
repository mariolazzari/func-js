function createPrinter() {
  const myNum = 50;

  return () => {
    console.log(`My number is: ${myNum}`);
  };
}

const printer = createPrinter(); // still has access to myNum, even out of scope
printer();
// console.log(myNum); -> error

// create private vars
const Person = ({ name, age, job }) => {
  let personName = name;
  let personAge = age;
  let personJob = job;

  return {
    getName: () => personName,
    setName: name => (personName = name),
    getAge: () => personAge,
    incrementAge: () => personAge++,
    getJob: () => personJob,
  };
};

const person = Person({ name: "Mario", age: 49, job: "Developer" });
console.log("Name:", person.getName());
// console.log("Name:", person.name); -> undefined
person.incrementAge();
console.log("Age:", person.getAge());
person.setName("Mario Lazzari");
console.log("Name:", person.getName());

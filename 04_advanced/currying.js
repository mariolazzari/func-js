const add = (x, y, z) => x + y + z;
console.log(add(1, 2, 3));

const addPartial = x => (y, z) => add(x, y, z);

const add1 = addPartial(1);
console.log(add1(2, 3));

const getPropertyWithDefault = (obj, key, defaultValue) => {
  if (obj[key]) {
    return obj[key];
  }
  return defaultValue;
};

const getPropertyPartial = (key, defaultValue) => obj =>
  getPropertyWithDefault(obj, key, defaultValue);

const getName = getPropertyPartial("name", "Mario");
const person = {};
console.log(getName(person));

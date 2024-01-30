const person = {
  name: "Gabi",
  age: 20,
  city: "Giurgiu",
};

// person = {};

const array = [];

array.push(1);

console.log(person);

console.log(array);

person["age"] = 21;

person["country"] = "Romania";

delete person.name;

console.log(person);

for (let proprietate in person) {
  if (proprietate === "age") {
    console.log(proprietate, person[proprietate]);
  }
}

for (let [cheie, valoare] of Object.entries(person)) {
  console.log(cheie, valoare);
}

Object.freeze(person);

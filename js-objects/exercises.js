// 1.
let car = {
  brand: "Audi",
  model: "A5",
  year: 2020,
  price: 25000,
  km: 10000,
  combustible: "benzină",
  hp: 190,
  lastRevizion: "2023-03-10",
  nextRevision: "2024-03-10",
};

console.log(car);

delete car.lastRevizion;

car.hp = 250;

car.nextRevision = "2024-03-20S";

console.log(car);

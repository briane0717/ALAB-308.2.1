const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const spacePlant = 0.8;

let gardenCapacity = area / spacePlant;

console.log(gardenCapacity);

let initalCount = 20;
let weekCount = 3;
let plantCount = initalCount * 2 ** (weekCount - 1);
console.log(plantCount);

if (plantCount > gardenCapacity * 0.8) {
  console.log("Prune");
} else {
  console.log("Everything is fine");
}

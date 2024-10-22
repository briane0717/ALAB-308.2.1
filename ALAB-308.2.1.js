const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const spacePlant = 0.8;

let gardenCapacity = area / spacePlant;

console.log(gardenCapacity);

let initialCount = 20;

let weekCount = 1;
let plantCount = initialCount * 2 ** (weekCount - 1);
console.log(plantCount);

if (plantCount > gardenCapacity * 0.8) {
  console.log("Prune");
} else if (
  plantCount > gardenCapacity * 0.5 &&
  plantCount < gardenCapacity * 0.8
) {
  console.log("Monitor");
} else if (plantCount < gardenCapacity * 0.5) {
  console.log("Plant");
} else {
  console.log("Everything is fine");
}
weekCount = 2;
plantCount = initialCount * 2 ** (weekCount - 1);
console.log(plantCount);

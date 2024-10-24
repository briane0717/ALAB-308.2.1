const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const spacePlant = 0.8;

let gardenCapacity = area / spacePlant;

console.log("Garden Capacity: " + gardenCapacity);

let initialCount = 20;

let weekCount = 1;
let plantCount = initialCount * 2 ** (weekCount - 1);
console.log("Plant Count: " + plantCount);

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
console.log("Plant Count: " + plantCount);

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

weekCount = 3;
plantCount = initialCount * 2 ** (weekCount - 1);
console.log("Plant Count: " + plantCount);

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
initialCount = 100;
weekCount = 10;
plantCount = initialCount * 2 ** (weekCount - 1);
console.log("Plant Count: " + plantCount);
let requiredSpace = plantCount * spacePlant;
console.log("Required Space: " + requiredSpace);
let additionalSpaceRequired = requiredSpace - area;
console.log("Additional Space Required: " + additionalSpaceRequired);
let newRadiusSquared = requiredSpace / PI;
console.log(newRadiusSquared);

let availableSpace = area;
let neededSpace = requiredSpace;
try {
  if (availableSpace > neededSpace) {
    console.log("We have space");
  } else {
    throw "Error -not enough space";
  }
} catch (error) {
  console.log(error);
} finally {
  console.log("this runs if there is an error or if there is no error");
}

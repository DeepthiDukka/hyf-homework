/*Item array removal */

const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

for (let i = 0; i < names.length; i++) {
  if (names[i] === nameToRemove) {
    console.log("removed item: " + names[i]);
    names.splice(1, i);
  }
}
console.log(names);

/* Another way of removing 'Ahmad' from the array */
names.indexOf("Ahmad");
names.splice(1, 1);
console.log(names);
/*Item array removal */

const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

for (let i = 0; i < names.length; i++) {
  if (names[i] === nameToRemove) {
    console.log("removed item: " + names[i]);
    names.splice(i, 1);
  }
}
console.log(names);

/*Item-kristina removal as per the feedback from array */
const names1 = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove1 = 'kristina'; /* slightly changed the variable names so that they won't interfere with the above variable names */
for (let i = 0; i < names1.length; i++) {
  if (names1[i] === nameToRemove1) {
    console.log("removed item: " + names1[i]);
    names1.splice(i,1);
  }
}

console.log(names1);
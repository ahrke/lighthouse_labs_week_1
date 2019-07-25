const assertEqual = require('./assertEqual').assertEqual;
const eqArrays = require('./eqArrays').eqArrays;

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (let k of Object.keys(object1)) {
    if (Array.isArray(object1[k])) {
      if (!eqArrays(object1[k],object2[k])) return false;
      continue;
    }
    if (typeof object1[k] === 'object') {
      return eqObjects(object1[k], object2[k]);
    }
    if (object1[k] !== object2[k]) return false;
    
  }

  return true;
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc));

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2));

// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true) // => true

// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false) // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false)

module.exports = eqObjects;
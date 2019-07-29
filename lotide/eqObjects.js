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

module.exports = eqObjects;
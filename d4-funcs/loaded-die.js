const rollDie = function () {
  return Math.floor(1 + Math.random() * 6);
}

console.log(rollDie()); 

function makeLoadedDie() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let i = -1;

  return function() {
    i++;
    return list[i]
  }
}

const rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie()); 
console.log(rollLoadedDie()); 
console.log(rollLoadedDie()); 
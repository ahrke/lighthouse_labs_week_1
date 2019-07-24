const findWaldo = function(names, found) {
  names.forEach((name,i) => {
    if (name === "Waldo") {
      found(i);   // execute callback
    }
  })
}

const actionWhenFound = function(index) {
  console.log(`Found him at index => ${index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
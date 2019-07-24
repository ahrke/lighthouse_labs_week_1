function findWaldo(names, found) {
  names.forEach((name,i) => {
    if (name === "Waldo") {
      found(i);   // execute callback
    }
  })
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log(`Found him at index => ${index}!`);
});
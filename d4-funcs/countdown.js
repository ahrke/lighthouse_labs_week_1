const countdownGenerator = function (x) {
  x = x + 1;

  return function() {
    x--;

    switch(true) {
      case x > 0:
        str = `T-minus ${x}...`;
        break;
      case x === 0:
        str = `Blact Off!`;
        break;
      default:
        str = 'Rockets already gone, bub!';
        break;
    }
    console.log(str);
  }
};

const countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
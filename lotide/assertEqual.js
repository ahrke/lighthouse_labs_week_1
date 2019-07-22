let assertEqual = function(actual, expected) {
  (actual === expected) ?
    console.log("🤑️: ",actual," === ",expected)
    : console.log("🤬️: ",actual," !== ",expected);
};

assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1,1);
assertEqual('bambalaaands','bambalaaands');
assertEqual('ambidextrous','ambidextros');
assertEqual(12,12);
assertEqual(2048,3048);
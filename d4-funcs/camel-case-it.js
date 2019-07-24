let camelCase = function(input) {
  let camelCased = input.split(' ').map(str => str[0].toUpperCase() + str.slice(1)).join('');
  
  return camelCased[0].toLowerCase() + camelCased.slice(1);
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
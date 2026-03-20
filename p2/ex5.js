const numbers = [5, 12, 18, 3, 7];
const result = numbers
  .filter(num => num > 10)
  .map(num => num+2);

console.log(result);

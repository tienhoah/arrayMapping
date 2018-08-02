var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(obj => {
  var array = {};
  var output = 0;
  array[obj.x] = obj.y;
  output = (obj.x**2) + (array[obj.x]**2);
  return Math.sqrt(output);
});
console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

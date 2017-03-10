var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];


var result = input.map(function(donkey) {
  return Math.sqrt(Math.pow(donkey.x, 2) + Math.pow(donkey.y, 2));
})

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

// var result = input.map(function(x, y) {
//   return x+ y;
// });

// var result = [];
// for (var i = 0; i < input.length; i++ ) {
//   result.push(input[i].x);
// }

// var result = input.map(function(donkey) {
//   return donkey.x;
// })
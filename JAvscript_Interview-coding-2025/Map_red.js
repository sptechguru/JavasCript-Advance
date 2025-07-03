let studentArr = [
  { id: "1", name: "AAA", city: "Nagpur", population: 45 },
  { id: "2", name: "BBB", city: "Pune", population: 32 },
  { id: "3", name: "CCCC", city: "Bhopal", population: 88 },
  { id: "4", name: "DDD", city: "Mumbai", population: 98 },
  { id: "5", name: "EEE", city: "Jaipur", population: 24 },
  { id: "6", name: "FFFF", city: "Indore", population: 22 },
];

let newArr = studentArr.map((item) => {
 return {
    id: item.id,
    name: item.name,
  };
});
console.log(newArr);
//Output => [{ id: "1", name: "AAA" }, { id: "2", name: "BBB" }, { id: "3", name: "CCCC" }, { id: "4", name: "DDD" }]

let studIds = studentArr.map((item) => {
  return item.id;
});
console.log(studIds);
// => output => ["1", "2", "3", "4", "5", "6"]

let totPopulation = studentArr.reduce(function (acc, obj) {
  return acc + obj.population;
}, 0);
console.log(totPopulation); //=> output => 309

var arr = [4, 8, 7, 13, 12];
var sum = arr.reduce(function (x, y) {
  return x + y;
}, 0);
console.log("aaa", sum); //=> 44

// JavascriptPrograms
//     swap two variables

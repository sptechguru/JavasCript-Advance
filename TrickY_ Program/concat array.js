let arrobj = [
    {id:1,fruit:"apple"},
    {id:2,fruit:"orange"},
    {id:3,fruit:"banana"}
];

let tools = [
    {id:4,tool:"knife"},
    {id:2,fruit:"axe"},
    {id:1,fruit:"drill"},
];


var result = arrobj.map((msg)=> {
    var haveEqualId = (user) => user.id === msg.id
    var userWithEqualId= tools.find(haveEqualId)
    return Object.assign({}, msg, userWithEqualId)
  })
  console.log(result)



let list = []
list.push(arrobj,tools)
let concat = arrobj.concat(tools)

console.log(concat);
console.log(list);

var merged = _.map(a1, function(item) {
    return _.assign(item, _.find(a2, ['id', item.id]));
});

console.log(merged);

// Given a boolean 2D array, where each row is sorted. Find the row with the maximum number of 1s. 

// Example 

// Input matrix
// 0 1 1 1
// 0 0 1 1
// 1 1 1 1  // this row has maximum 1s
// 0 0 0 0

Output: 2
console.log("Recursion called........");

const facTorial = (item) => {
    if (item == 0) return 1;
    return item * facTorial(item - 1);
}
// console.log(facTorial(5));


function Sum(num) {
    console.log(num);
    if (num > 10) {
        Sum(num + 1);
    }
}

console.log(Sum(0))
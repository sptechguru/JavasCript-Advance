console.log("Recursion called........");

const facTorial = (item) => {
    if (item == 0) return 1;
    let fact = item * facTorial(item - 1);
    return fact;
}
console.log(facTorial(5));


function Sum(num) {
    console.log(num);
    if (num <= 10) {
        Sum(num + 1);
    }
}
console.log(Sum(10));
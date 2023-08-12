console.log("Prime Number is Divisible by it self");

let number = prompt("Enter a Number");

const PrimeNumber = (number) => {
    let input = '';
    if (number === 1) {
        console.log(`This is Neither composite Number is : ${number}`);
    }
    else if (number < 1) {
        console.log(`Negative Number is not Possible  : ${number}`);

    }

    else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                input = `Not prime Number is: ${number}`;
                break;
            }
            else {
                input = `This is Prime Number: ${number}`;
            }
        }
        return input;
    }
}
console.log(PrimeNumber(-1)); 
console.log(PrimeNumber(number));

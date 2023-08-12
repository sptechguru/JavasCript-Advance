let n = 10; // row or column count
let string = "";

for (let i = 1; i < n; i++) {

    // for(let k = 1; k<=30-i; k++){
    //     string = string + " " 
    // }

    for (let j = 1; j <= i; j++) {
        string += "*";
        // string = string + i;
        // string =string+j;

    }
    // newline after each row
    string += "\n";
}
// printing the string
console.log(string);





const pattern = (num) => {
    let str = "";
    for (let i = 1; i <= num; i++) {
        for (let space = 1; space <= 30 - i; space++) {
            str += ' '
        }
        for (let j = 1; j <= i; j++) {
            str += "*";
        }
        str += "\n";
    }
    for (let i = 1; i <= num - 1; i++) {
        for (let space = 1; space <= 25 + i; space++) {
            str += ' '
        }
        for (let j = 1; j <= i; j++) {
            str += "*";
        }
        str += "\n";
    }
    console.log(str);
}
pattern(10);

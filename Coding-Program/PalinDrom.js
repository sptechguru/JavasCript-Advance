console.log("Palindrome Number is  input revesr out for Ex (EYE,MADAM)");

const checkPaliDrome = (str) => {
    let brakeString = str.split('').reverse().join('');
    if (brakeString === str) {
        console.log('This is Palidrome', str);
    }
    else {
        console.log('Not Palidrome', str);
    }
    return brakeString;

    //  return brakeString  === str;

}

console.log(checkPaliDrome('madam'))
// console.log(checkPaliDrome('PAL'))

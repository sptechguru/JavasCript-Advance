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
console.log(checkPaliDrome('PAL'))


const checkPaliDrom = (str) => {
    let left = 0;
    let right = str.length - 1;
    let output = ''
    while (left < right) {
        if (str[left] !== str[right]) {
            output = 'This is Not Palindrome'+str;
            return output;
        }
        else {
            left++;
            right--;
            output = 'This is Palindrome '+ str;
            return output;
        }
    }
}

console.log(checkPaliDrom('EYE'))
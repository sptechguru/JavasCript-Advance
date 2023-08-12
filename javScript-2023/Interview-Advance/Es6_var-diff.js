var a = 20;
var a = 30;
console.log(a);

let b = 40;
//let b =50;  // that is not redecalre  for error showing b already is declare

console.log(b);

const str = "Santosh" // const is not modiyify values 
//str = 'pal'
console.log(str)

const blockCode = () => {
    let blo = "Rajesh"
    if (true) {
        let blo = "Kumar"
        console.log('same varriables used block of code', blo);
    }
    console.log('global var decalred', blo);
}
console.log('with using function....', blockCode())
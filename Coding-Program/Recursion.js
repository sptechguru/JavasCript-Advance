console.log("Recrsion is Calling itself fuction that is Recusion");
//  write a number a print  1 to 10 withought loop in javascript ;

const Recursion = (start, end) =>{
    if(start <= end){
        console.log(start)
        Recursion(start+1, end);
    }
}
console.log(Recursion(1,20));


const facTorial = (num) => {
    if (num == 0){
        return 1;
    } 
    else{
      let fact = num * facTorial(num - 1);
      return fact;
    }
}
console.log(facTorial(5));

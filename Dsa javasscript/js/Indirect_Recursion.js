console.log("Insert Recusrsion js........");

let money = 100;
let totalApple = 0;

const buyApple = (m)=>{
  if(m >0 ){
     console.log(`I have ${m} Rs ${totalApple}`);
     buyMore(m-10);
    }
    else{
        console.log(`Don't Buy Appple ${totalApple}`);
    }
}

const buyMore = (x) => {
 totalApple ++;
 buyApple(x-5);
}

// console.log(buyApple(money));


let arrReverse = [5,90,80,50,100,300,200];

const recurSionReverse = (arr, start, end)=>{
 if(start <= end){
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] =  temp;
    recurSionReverse(arr, start+1, end-1);
  }
}
console.log(recurSionReverse(arrReverse,0,arrReverse.length-1));




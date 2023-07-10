for(let i = 0; i<=3; i++){
    console.log(i)
    console.log('..............................');
    
    setTimeout(()=>{
    console.log('....Set Timeout..');

        console.warn(i)
    },1000)
}


// output is  3,3,3
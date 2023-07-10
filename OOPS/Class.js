class Cars {

    constructor(cname,cprice,fetures,color){
     this.carName = cname;
     this.price = cprice;
     this.fetures = fetures
     this.colors =  color;

     console.log("Car Class constructor is Called..");
    }

    CarDetails(){
        console.log(`Car Name is : ${this.carName} and price is :${this.price} 
        Features is : ${this.fetures} & Color is ${this.colors}`)
    }

}

class Features extends Cars {

    constructor(cname,cprice,fetures,color,milege,ac,seater){
        super(cname,cprice,fetures,color,milege,ac,seater);
        this.avg = milege;
        this.Ace = ac;
        this.seaters = seater;

     console.log("Features constructor is Called..");
    }

    Car_Features(){
        console.log(`Car  milege is ${this.avg} & Ac Conditioner is 
        ${this.Ace} & Seater is a ${this.seaters} ..`)
    }

}

let cr = new Features('Fortuner',500000,"Automatic Gprs Location track ",
"Black",'40km','Full Ac',5);

cr.CarDetails();
cr.Car_Features();
console.log(cr);

let cr2 = new Features('odi',500000," Gprs Location track ",
"white",'4km','Full Ac',5);

cr2.CarDetails();
cr2.Car_Features();
console.log(cr2);
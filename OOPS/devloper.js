class Developer {
    constructor(name,last, dob, email,mob){
        this.fname = name;
        this.lname = last;
        this.Birth = dob;
        this.emailid = email;
        this.mobil = mob;
        console.log("constructor Developer By default called");
}
 showDeveloperDetails() {
      console.log(`First name is ${this.fname} & last Name is ${this.lname} & Birth is ${this.Birth}
      Devloper Mail id is ${this.emailid} & pleaase contact this Number ${this.mobil}`)
    }
}

class Role extends Developer {
 constructor(name,last, dob, email,mob,user, post, sallary){
    super(name,last, dob, email,mob,user, post, sallary);
    this.admin = role;
    this.catego = post;
    this.package = sallary;
    console.log("Role constructor is called");
}

 DevloperFeatures(){
    console.log(`user is Role for Super Admin ${this.admin} & User Post is ${this.catego} & Packages is ${this.package} .`)
}

}

let obj = new Developer ("santosh","pal", "19/04/1998" ,"palsantosh1698@gmail.com", "8787897444");
obj.showDeveloperDetails();
// obj.DevloperFeatures();

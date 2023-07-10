class Employee {
  constructor(name, last, emailid, age, dob, mobile, gender, doj, role) {
    this.name = name;
    this.last = last;
    this.email = emailid;
    this.age = age;
    this.dob = dob;
    this.mobile = mobile;
    this.gender = gender;
    this.role = role;
    this.doj = doj;

    console.log("Constructor is Automatic Called : Employee");
  }

  // That is Protype Of method
  Biodata() {
    return ` Employee name is : ${this.name} & Last Name is 
        : ${this.last} Email id is ${this.email} & Age is : ${this.age} & Date Of Birth is ${this.dob}
        & Mobile Number is ${this.mobile} Category is ${this.gender} Devloper Role is ${this.role} `
  }

  // That is Static method
  static Static_method() {
    console.log("Static method is Called Using Class names");
  }
}

// that is Inneheritance  Developer Is Class is Child class

class Developer extends Employee {
  constructor(name, last, emailid, age, dob, mobile, gender, doj, role, sal, bonus, skill) {

    super(name, last, emailid, age, dob, mobile, gender, doj, role);

    this.salary = sal;
    this.bonus = bonus;
    this.skill = skill;
    console.log("Developer Constructor is called");
  }

  devSkills() {
    return `${super.Biodata()} Developer Sallry  is : ${this.salary} & Diwali Bonous
        : ${this.bonus} & Skill is Mandotary for all role Assigne ${this.skill}`;
  }
}

// that is Multiple inhertance

class Manger extends Developer {
  constructor(name, last, emailid, age, dob, mobile, gender, doj, role, sal, bonus, skill, ta, pa, totalsalary) {
    super(name, last, emailid, age, dob, mobile, gender, doj, role, sal, bonus, skill, ta, pa, totalsalary);
    this.ta = ta;
    this.pa = pa;
    this.totalsalary = this.sal + pa + ta;
  }

  manSkills() {
    console.log(` ${super.devSkills()}  Ta is : ${this.ta} & pa is 
    : ${this.pa} & Manger sallary is  ${this.totalsalary}`);
  }

}

let man = new Manger(
  "Santosh",
  "pal",
  "santoshpal1698@gmail.com",
  23,
  "16/04/1998",
  8839102688,
  "Male",
  "1/04/2020",
  "Full Stack Developer",
  3000,
  1000,
  "Multiple Role Asigne"
);

console.log(man.manSkills());
console.log(man);



////////////////////////////////////////////////////////////////////////////////////////////

// that is child class in make objects dev

let dev = new Developer(
  "Santosh",
  "pal",
  "santoshpal1698@gmail.com",
  23,
  "16/04/1998",
  8839102688,
  "Male",
  "1/04/2020",
  "Full Stack Developer",
  3000,
  1000,
  "Multiple Role Asigne"
);

dev.devSkills();
console.log(dev);

let obj9 = new Employee("Santosh", "pal", 'santoshpal1698@gmail.com', 23, '16/04/1998', 8839102688, 'Male', "1/04/2020", "Full Stack Developer")
obj.Biodata();
console.log(obj9);


//////////////////////////////////////////////////////////////////////////////////////////

// that is parent class in make objects

let obj = new Employee("Santosh", "pal", 'santoshpal1698@gmail.com', 23, '16/04/1998', 8839102688, 'Male', "1/04/2020", "Full Stack Developer")
let obj2 = new Employee("Surendra", "pal", 'surendrpal1698@gmail.com', 22, '16/04/2000', 8817309010, 'Male', "13/04/2021", "React js Developer")
let obj3 = new Employee("sani", "pal", 'sani@gmail.com', 23, '16/04/1998', 8839102688, 'Male', "14/04/2020", "UI Developer")
let obj4 = new Employee("jitu", "pal", 'jitu@gmail.com', 22, '16/04/2000', 8817309010, 'Male', "34/04/2021", "Angular Developer")
let obj5 = new Employee("sandeep", "pal", 'sandeep@gmail.com', 23, '16/04/1998', 8839102688, 'Male', "11/04/2020", "Dot Net Developer")
let obj6 = new Employee("raj", "pal", 'raj@gmail.com', 22, '16/04/2000', 8817309010, 'Male', "30/04/2021", "Java Developer")
obj.Biodata();
obj2.Biodata();
obj3.Biodata();
obj2.Biodata();
obj4.Biodata();
obj5.Biodata();
obj6.Biodata();

// that is Static mmethod
Employee.Static_method();

let mylist = [];
mylist.push(obj, obj2, obj3, obj4, obj5, obj6);
console.log(mylist);

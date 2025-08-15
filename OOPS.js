// // OOP

// //Object

// //Factory Function
// function aboutPerson(name, add){
//     return {
//         name,  // name: name,
//         add,    // add: add,
//         bio()
//         {
//             return `Hey this is ${this.name} and I live in ${this.add}`;
//         }
//     }
// }

// const premObj = aboutPerson('john', 'Melbourne');

// console.log(premObj, premObj.bio());

// const samObj = aboutPerson('sam', 'UK');

// console.log(samObj, samObj.bio());

// // Constructor function

// function Aboutperson(name, add){
//     this.name = name;
//     this.add = add;
// }

// Aboutperson.prototype.bio = function(){
//     return `Hey this is ${this.name}, live in ${this.add}`;
// };

// const premobj = new Aboutperson("Prem", "Melbourne");
// console.log(premobj.bio());

// // const premobj = new Aboutperson("John", "Melbourne");
// // console.log(premobj);


// //Class OOP

// class Person {
//       constructor(name, add)
//       {
//         this.name = name;
//         this.add = add;
//         this.key = "makdjkjd";
//       }

//       bio(){
//         return `Hey this is ${this.name}, live in ${this.add}`;
//       }

//       nameUpper(){
//         this.name = this.name.toUpperCase();
//       }
// }

// const premobj1 = new Person("prem", "melbourne");
// console.log(premobj1.bio());


// //4 Pillars of the OOP

// const premObj2 = {
//     name: "Prem",
//     add: "Sydney",
//     dob: "1-1-2000"
// }

// function bio(p){
// return `this is ${p.name} from ${p.add} and I am ${getAge(p.dob)} years old.`;
// }

// function getAge(dob){
// return new Date().getFullYear() - new Date(dob).getFullYear();
// }

// function birthDay(p){
// return `Happy birthday ${p.name}! Now you are ${getAge(p.dob) + 1} years old`
// }

// console.log(bio(premObj2));
// console.log(birthDay(premObj2));

// //Encapsulation

// class Person1
// {

//   constructor(obj){
//     #dob
//   this.name = obj.name;
//   this.add = obj.add;
//   this.#dob = obj.dob;
//   }

//   bio(){
//     return `This is ${this.name} from ${this.add} and I am ${getAge(this.#getAge{this.#dob})} years old`;
//   }

//   #getAge(){
//     return new Date().getFullYear() - new Date(this.#dob).getFullYear();
//  }

//   birthDay(){
//   return `Happy birthday ${this.name}! Now you are ${this.#getAge(this.#dob) + 1} years old`;
//   }

// }

// const premInfo = new Person1(premObj);
// console.log(premInfo.getAge());

//Inheritence
//Person class

class Living{ 
  constructor(name, add){
    this.name = name;
    this.add = add;
  }
bio(){
    return `This is ${this.name} from ${this.add}`;
  }

  pow(){
  return `${this.name} can jump ${this.strength}`;
}
myCareer(){
    return `their career is ${this.career}`;
  }
}

class Person2 extends Living
{
  constructor(obj){
  // this.name = obj.name;
  // this.add = obj.add;
  super(obj.name, obj.add)
  this.career = obj.career;
  }
}

const p1 = {
  name: "prem",
  add: "sydney",
  career: "Soft. eng."
}
const p1Info = new Person2(p1);
console.log(p1Info.myCareer());

// const p2 = {
//   name: "Sam",
//   add: "USA",
//   career: "Coder"
// }

// const p3 = {
//   name: "Harry",
//   add: "UK",
//   career: "Gamer"
// }

class Animal extends Living {
  constructor(obj){
  // this.name = obj.name;
  // this.add = obj.add;
  super(obj.name, obj.add)
  this.strength = obj.strength;
  }
   
}
const mkInfo = new Person2 (p1);
// const p1Info = new Person2(p1);
console.log(mkInfo.pow());

//Polymorphism

class Student extends Person2{
constructor(s1){
super(s1)
}

myCareer(){
    return `their career is ${this.career}`;
  }
}

const s1 = {
  name: "sam",
  add: "sydney",
  career: "Studying BIT"
};

const s1Infor = new Student(s1);
console.log(s1Infor.myCareer());


//Abstraction #2

class Living1{ 
  constructor(name, add){
    this.name = name;
    this.add = add;
    if(new.target === Living1){
      throw new Error("Cannot instatiate Living directly");
    }
  }
  bio(){
    return `This is ${this.name} from ${this.add}`;
  }
}

//Person class
class Person3 extends Living1
{
  constructor(obj){
  super(obj.name, obj.add)
  this.career = obj.career;
  }
}

const p2 = {
  name: "prem",
  add: "sydney",
  career: "Soft. eng."
}

const p2Info = new Person3(p2);
console.log(p2Info.bio());

// const p1obj = new Living("prem", "Sydney");
// console.log(p1obj.bio());

//oop Challenge

class Car
{
constructor(name, engine){
  this.name = name;
  this.engineOn = false;
}
stopEngine(){
  return `${this.name} engine is not running`;
}

drive(){
  if(this.engineOn){
     console.log(`${this.model} engine started. Ready to drive!`);
  }
  else{
    console.log(`Please start the engine first`);
  }
  
}

startEngine(){
  if(!this.engineOn){
    this.engineOn = true;
    console.log(`${this.modal} engine started. Ready to drive!`);
  }
    else{
  return `${this.name} engine is already running. `;
    }
  }
}


const myCar = new Car("Tesla");
console.log(myCar.stopEngine());
console.log(myCar.drive());
console.log(myCar.startEngine());

// Example Usage: 
// const myCar = new Car("Tesla");
// myCar.startEngine();
// myCar.drive();
// myCar.stopEngine();

//// ###### OOP Challange
//let's create a software to start, drive and stop car

// class Car {
//   constructor(model) {
//     this.model = model;
//     this.engineOn = false;
//   }

//   startEngine() {
//     if (!this.engineOn) {
//       this.engineOn = true;
//       console.log(`${this.model} engine started. Ready to drive!`);
//     } else {
//       console.log(`${this.model} engine is already running.`);
//     }
//   }

//   drive() {
//     if (this.engineOn) {
//       console.log(`${this.model} is now moving.`);
//     } else {
//       console.log(`Please start the engine first.`);
//     }
//   }

//   stopEngine() {
//     if (this.engineOn) {
//       this.engineOn = false;
//       console.log(`${this.model} engine stopped.`);
//     } else {
//       console.log(`${this.model} engine is not running.`);
//     }
//   }
// }

// Example Usage:
// const myCar = new Car("Tesla");
// myCar.startEngine();
// myCar.drive();
// myCar.stopEngine();

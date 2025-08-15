// execution context
// var globalVar = "Global";
// var innerFuncVar = "test";
// function outerFunctionScop() {
//   var outerFunVar = "Outer";

//   function innerFuncScop() {
//     var innerFuncVar = "inner";

//     // if (true) {
//     //   let val = "is true";
//     //   console.log(val);
//     // }
//     // console.log(val);

//     console.log(innerFuncVar);
//     // console.log(outerFunVar);
//     // console.log(globalVar);
//   }
//   //   console.log(outerFunVar);
//   innerFuncScop();
// }

// outerFunctionScop();
// console.log(innerFuncVar);
// console.log(outerFunVar);
// console.log(globalVar);

//// HOISTIING
// Moving variables or function declarations to the top of their context
// How and where you create a variable determines the hoisting
// console.log(a);
// function f() {
//   var a = "a";

//   if (true) {
//     var a = "zzz";
//     console.log(a);
//   }
//   console.log(a);
// }

// f();

// var a = "ee";

//// CLOUSER
//Allowing a function to remember and access its lexical scope even when it's executing outside its original scope.
// a function inside a function can have access to the vairable difined in the parent function even parent functioin finish executing

// function f() {
//   let counter = 0;

//   return function () {
//     return counter++;
//   };
// }

// const v1 = f();
// console.log(v1());

// console.log(v1());
// console.log(v1());
// console.log(v1());
// console.log(v1());
// console.log(v1());

// let counter = 0;
// for (var i = 0; i < 5; i++) {
//   function print() {
//     console.log(i + " but couter is " + counter++);
//   }

//   setTimeout(print, 0);
// }

///OOP

//Object
// const person = {
//   name: "Prem",
//   add: "Sydney",
//   bio() {
//     console.log(this, "---");
//     return `
//         Hey this is ${this.name}, live in ${this.add}
//         `;
//   },
// };

// console.log(person.bio());

//Factory Function
// function aboutPerson(name, add) {
//   return {
//     name,
//     add,
//     bio() {
//       return `Hey this is ${this.name}, live in ${this.add} `;
//     },
//   };
// }

// const premObj = aboutPerson("Prem", "Sydney");
// console.log(premObj, premObj.bio());

// const samObj = aboutPerson("Sam", "UK");
// console.log(samObj, samObj.bio());

//Constructor Functions
// function AboutPerson(name, add) {
//   this.name = name;
//   this.add = add;
// }

// AboutPerson.prototype.bio = function () {
//   return `Hey this is ${this.name}, live in ${this.add} `;
// };

// const premObj = new AboutPerson("Prem", "Sydney");
// console.log(premObj.bio());

///CLASS OOP
// class Person {
//   constructor(name, add) {
//     this.name = name;
//     this.add = add;
//     this.key = "lajfslasjdlf";
//   }

//   bio() {
//     return `Hey this is ${this.name}, live in ${this.add} `;
//   }

//   nameUpper() {
//     this.name = this.name.toUpperCase();
//   }
// }

// const premObj = new Person("prem", "Sydney");
// console.log(premObj);
// premObj.nameUpper();
// console.log(premObj.bio());
// console.log(premObj);

////THIS KEYWORDS
// This key represent an object depends on where it is use. 'This' will refer to the object of the property it is executed

// THIS KEYWORDS USE CASES:
//=== 1.Global Context

// console.log(window === this);
//1.1 Regular Functions:
// function f() {
//   console.log(this);
// }
// f();

//1.2 Method Calls:
// const obj = {
//   name: "prem",
//   bio() {
//     console.log(this);
//     console.log(this.name);
//   },
// };
// obj.bio();

//1.3 Constructor Functions
// function Person(name) {
//   console.log(this);
//   this.name = name;
// }
// const person = new Person("Prem");
// console.log(person.name); // 'Prem'

//2. ===Arrow Functions
//2.1 Arrow Functions
// const obj = {
//   name: "Prem",
//   bio: () => {
//     console.log(this);
//     console.log(this.name);
//   },
// };
// obj.bio();

//===== procedural PP

// const premObj = {
//   name: "Prem",
//   add: "Sydney",
//   dob: "1-1-2000",
// };

// function bio(p) {
//   return `This is ${p.name} form ${p.add} and I am ${getAge(p.dob)} years old.`;
// }

// function getAge(dob) {
//   return new Date().getFullYear() - new Date(dob).getFullYear();
// }

// function birthDay(p) {
//   return `Happy birthday ${p.name}! Now you are ${getAge(p.dob) + 1} years old`;
// }

// console.log(bio(premObj));
// console.log(birthDay(premObj));

//===4 pillars of the OOP
//Encapsulation / Abstraction

// class Person {
//   #dob;

//   constructor(obj) {
//     this.name = obj.name;
//     this.add = obj.add;
//     this.#dob = obj.dob;
//   }

//   bio() {
//     return `This is ${this.name} form ${this.add} and I am ${this.#getAge(
//       this.#dob
//     )} years old.`;
//   }

//   #getAge() {
//     return new Date().getFullYear() - new Date(this.#dob).getFullYear();
//   }

//   birthDay() {
//     return `Happy birthday ${this.name}! Now you are ${
//       this.#getAge(this.#dob) + 1
//     } years old`;
//   }
// }

// const premInfo = new Person(premObj);

// console.log(premInfo.birthDay());

///// Inheritance

// class Living {
//   constructor(name, add) {
//     this.name = name;
//     this.add = add;
//   }
//   bio() {
//     return `This is ${this.name} form ${this.add}`;
//   }
// }

// // person class
// class Person extends Living {
//   constructor(obj) {
//     super(obj.name, obj.add);
//     this.career = obj.career;
//   }
// }

// const p1 = {
//   name: "prem",
//   add: "sydney",
//   career: "Soft. eng.",
// };

// const p1Info = new Person(p1);
// console.log(p1Info.bio());

// class Animal extends Living {
//   constructor(obj) {
//     super(obj.name, obj.add);
//     this.strength = obj.stregth;
//   }

//   pow() {
//     return `${this.name} can jump ${this.strength}`;
//   }
// }

// const monkey1 = {
//   name: "mky1",
//   add: "xyz zoom",
//   stregth: "Jumping bewteen tress of 10m apart",
// };
// const mkInfo = new Animal(monkey1);
// console.log(mkInfo);

// Polymorphism

// class Student extends Person {
//   constructor(s1) {
//     super(s1);
//   }

//   myCareer() {
//     return `Currently ther are ${this.career}`;
//   }
// }

// const s1 = {
//   name: "Sam",
//   add: "USA",
//   career: "Studying BIT",
// };
// const s1Info = new Student(s1);
// console.log(s1Info.myCareer());

// const alienObj = new Living("Alien", "Mars");
// console.log(alienObj.bio());

////Abstraction #2
// class Living {
//   constructor(name, add) {
//     this.name = name;
//     this.add = add;
//     if (new.target === Living) {
//       throw new Error("Cannot instantiate an abstract class directly.");
//     }
//   }
//   bio() {
//     return `This is ${this.name} form ${this.add}`;
//   }
// }

// // person class
// class Person extends Living {
//   constructor(obj) {
//     super(obj.name, obj.add);
//     this.career = obj.career;
//   }
// }

// const p1 = {
//   name: "prem",
//   add: "sydney",
//   career: "Soft. eng.",
// };

// const p1Info = new Person(p1);
// console.log(p1Info.bio());

// const p1Obj = new Living("Prem", "Sydney");// throws error
// console.log(p1Obj.bio());

// ###### OOP Challange
// let's create a software to start, drive and stop car

class Car {
  constructor(model) {
    this.model = model;
    this.engineOn = false;
  }

  startEngine() {
    if (!this.engineOn) {
      this.engineOn = true;
      console.log(`${this.model} engine started. Ready to drive!`);
    } else {
      console.log(`${this.model} engine is already running.`);
    }
  }

  drive() {
    if (this.engineOn) {
      console.log(`${this.model} is now moving.`);
    } else {
      console.log(`Please start the engine first.`);
    }
  }

  stopEngine() {
    if (this.engineOn) {
      this.engineOn = false;
      console.log(`${this.model} engine stopped.`);
    } else {
      console.log(`${this.model} engine is not running.`);
    }
  }
}

// Example Usage:
const myCar = new Car("Tesla");
myCar.startEngine();
myCar.drive();
myCar.stopEngine();

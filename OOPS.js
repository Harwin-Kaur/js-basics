// OOP

//Object

//Factory Function
function aboutPerson(name, add){
    return {
        name,  // name: name,
        add,    // add: add,
        bio()
        {
            return `Hey this is ${this.name} and I live in ${this.add}`;
        }
    }
}

const premObj = aboutPerson('john', 'Melbourne');

console.log(premObj, premObj.bio());

const samObj = aboutPerson('sam', 'UK');

console.log(samObj, samObj.bio());

// Constructor function

function Aboutperson(name, add){
    this.name = name;
    this.add = add;
}

Aboutperson.prototype.bio = function(){
    return `Hey this is ${this.name}, live in ${this.add}`;
};

const premobj = new Aboutperson("Prem", "Melbourne");
console.log(premobj.bio());

// const premobj = new Aboutperson("John", "Melbourne");
// console.log(premobj);


//Class OOP

class Person {
      constructor(name, add)
      {
        this.name = name;
        this.add = add;
        this.key = "makdjkjd";
      }

      bio(){
        return `Hey this is ${this.name}, live in ${this.add}`;
      }

      nameUpper(){
        this.name = this.name.toUpperCase();
      }
}

const premobj1 = new Person("prem", "melbourne");
console.log(premobj1.bio());


//4 Pillars of the OOP

const premObj2 = {
    name: "Prem",
    add: "Sydney",
    dob: "1-1-2000"
}

function bio(p){
return `this is ${p.name} from ${p.add} and I am ${getAge(p.dob)} years old.`;
}

function getAge(dob){
return new Date().getFullYear() - new Date(dob).getFullYear();
}

console.log(bio(premObj2));
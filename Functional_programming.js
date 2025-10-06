const person = Object.freeze({
    name: "Prem",
    career: "Dented Code",
});

const newP = {...person, name: "Sam"};
console.log(person, newP);

//Pure Function

// const add = (a, b) => {
//     return a+b;
// };

// console.log(add(2,4));

//imPure Function //non pure

let total = 0;
const add = (a,b) => {
    total = a + b;
    return total;
};

console.log(add(2,4));
console.log(add(2,4));
console.log(add(2,4));
console.log(add(2,4));
console.log(add(2,4));

//Fist-class and higher-order functions

//[].map(()=> {})

    const add1 = (a, b) => {
        return a + b
    }

    const substract = (a, b) => {
        return a - b
    }

    const multsqr = (val, exp) => {
        return Math.pow(val, exp);
    }

    const calculator = (func, x, y) => {
        return func(x, y);
    }

    const result = calculator(add1, 2, 3);
    console.log(result);

    console.log(multsqr(2, 3));

    const calc2 = (a, b) => {
        const ttl = a + b;

        const multsqr =  (exp) => {
            return Math.pow(ttl, exp);
        };

       return multsqr;
    }

    const total1 = calc2(3, 3);
    const data = total1(2);
    //or

    // const data = calc2(3, 3)(2);
    console.log(data);

    //Function Composition

    const calc3 = (a, b, c) => {
        return multsqr(add(a, b), c);
    }

    console.log(calc3(2, 4, 2));

    //Recursion
// debugger;
//     let i = 0;
//     const counter = () => {
//         console.log(i++);
//         if(i === 10)
//             {
//             return;
//          }
//             };

//     console.log(counter());
let d = 0;
let sum = 0;
debugger;
const totaling = (nums) => {
    sum += nums.pop();

    if(!num.length){
        return sum;
    }
        return totaling(nums);
}

const num = [23, 3453, 645, 756, 75];
console.log(totaling(num));
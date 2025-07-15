//let & const - both are block scope

{
    let username="sanjaySK"
    username="sanjaykumar" //reassign is possible but cannot redeclared
}
{
    const email="sanjay@gmail.com"
    //email="sanjay"  cannot reassign and redeclared to constatnt variable
}

//destructuring
const user = { id: 1, name: "sanjay", email: "sanjay@gmail.com" };

const { id, name, email } = user;

console.log(id, name, email);

const color = ["red", "black", "yellow"];

const [first, , third] = color; //it will skip second word
console.log(first, third);

//rest and spred operator

let arr = [1, 2];
let fullarr = [...arr, 3, 4, 5]; //spread the existing values into new array
console.log(fullarr);

function sum(...nums) {
  //combine mulitple values into single array
  return nums.reduce((acc, curr) => (acc += curr));
}
console.log(sum(2, 2, 2));

//template literals
let name1 = "sanjay";

console.log(`hi i am ${name1} software developer`);

let multiline = `this is multi line string
and its prevents line breaks`;
console.log(multiline);

//arrow function

const add = (a, b) => {
  return a + b;
};
console.log(add(2, 3));

const obj = {
  a: 2,
  b: 2,
  add: () => {
    return this.a + this.b;
  },
};
console.log(obj.add()); //it will give NaN because arrow function dont have own this.so it will refer window object and it will give NaN.

//nullish coalscing - it returns right hand value when left is null or undefined

const pizza = {
  type: "margeritta",
  size: null,
  toppings: "olive",
};

const fullPizza = `${pizza.type} pizza ${pizza.size ?? ""} with ${pizza.toppings} toppings`;
console.log(fullPizza)  //here size is null so it will ignore


//optional chaining - accessing the nested properties without give type error.

const personal = {
    name:"sanjay",
    add:{
        area:'kk nagar'
    }
}

console.log(personal?.address?.area)  //here it will give undefined because there is no address.
                                 //if we dont use optional chaning here it will give type error so the app crashed
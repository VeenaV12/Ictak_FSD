// Arithmetic operators
/*let x = 3;
let y = 4;
let z = x + y;
console.log(z);
console.log(x- y);

// Increment and Decrement operator
let a = 1;
console.log(a);
b = a++; // postfix increment
c = ++a; // prefix increment
console.log(b);
console.log(c);

let p = 2;
console.log(p);
q = p--;
r = --p;
console.log(q);
console.log(r);


// comparison == >check data , === > check data type too
num1 = 5;
num2 = "5";
if (num1 === num2) {  // try this with == symbol
    console.log("Equal");
    
} else {
    console.log("Not equal");
    
}


// Not equal
num3 = 5;
num4 = 6;
if (num3 != num4) {
    console.log("Not Equal");
} else {
    console.log("Equal")
}

if (num3 >= num4) {
    console.log("Not Equal");
} else {
    console.log("Equal")
}

if (num3 <= num4) {
    console.log("Not Equal");
} else {
    console.log("Equal")
}

if (num3 < num4) {
    console.log("Not Equal");
} else {
    console.log("Equal")
}

if (num3 > num4) {
    console.log("Yes");
} else {
    console.log("NO")
}
*/

// && and ||

// Object
/*
let person ={
    name:"Veena",
    age: 32,
    address :{
        street: "Ambu",
        place: "KNR",
        pin : 670651
    }
    
}
console.log(person.address);


// new

var car = new Object();
car.brand = "Maruthi";
car.name = "Suzuki";
car.color = "White";
console.log(car.color);
*/
/*
let colors = ["red", "blue"];
colors.unshift("pink");
console.log(colors.length);
console.log(colors.indexOf("blue"));
console.log(colors);
colors.pop(); // delete last element
console.log(colors);
colors.shift(); // delete first element
console.log(colors);
*/

// array of object
const fruits = [{
    name:"Apple",
    price: 200
},{
    name: "Banana",
    price: 100
},{
    name: "Orange",
    price: 50
}];

console.log(fruits[1].name);

let cars = ["Benz", "Maruthi", "Kia", "hai"];
cars.splice(2,2);
console.log(cars);


function add(a,b){
    let c = a + b;
    console.log(c)
}add(2,4);

greet("John");// its okay to call a fuction before define it
function greet(name){ 
    console.log("hello "+name)
}

function square(n){
    let sq = n*n;
    console.log(sq);
}
square(6)

function convertFtoCelsius(temp){
    let c = (temp - 32)*5/9 ;
    console.log(c);
}convertFtoCelsius(100);

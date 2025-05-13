let num=20;
console.log(num);

let num1=20.90889;
num1="hello";
num1=true;
console.log(num1);

let num2;
console.log(num2);

let num3=null;
console.log(num3);

let num4=97997979779797979797979797987987987987987979;
console.log(num4);

num5=false;
console.log(typeof(num5))


const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");

console.log(sym3);


//symbol
// let user = {
//   name: "Manan",
//   age: 21
// };
const x= Symbol('Hello');
console.log(x);
console.log(typeof(x));
const str=Symbol("string is here");
console.log(str.description)
console.log(x.description);


let obj={
    name1:"hii"
}

obj[x]="hello";
console.log(obj);

console.log(obj.name1)
console.log(obj[x])

const str2=Symbol("Hello");
const str3=Symbol("hii");
console.log(str2 === str3);
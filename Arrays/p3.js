// //methods
// // 1.push
// let arr = [1,"hii",true]
// console.log(arr.push("class"));
// //it willl return the length of the new array
// console.log(arr.push("class2"));
// console.log(arr);

// //2.pop
// let arr1 = [1,"hii",true];
// console.log(arr1);
// arr1.pop();
// console.log(arr1);

// //3.shift
// let arr3 = [1,"hii",true];
// console.log(arr3);
// arr3.shift();
// console.log(arr3);

// //4.unshift
// let arr4 = [1,"hii",true];
// console.log(arr4);
// arr4.unshift("hello");
// console.log(arr4);

// //5.slice
// let arr5 = [1,2,3,4,8]
// console.log(arr5)

// let arr6 = arr5.slice(2,3)

// console.log(arr6)

// //6.splice 
// let arr7 = [1,2,3,4,8,9,78,89,5,7];
// arr7.splice(0,20);

// console.log(arr7);
// arr7.splice(5,0,8,9)
// console.log(arr7);
// arr7.splice(5,1)
// console.log(arr7);

//  //7. map
let arr8 = [1,2,3,4,8];

let ansArray = arr8.map((number)=>{
   
    return number + number;
})
console.log(arr8)
console.log(ansArray)
//new mw change hoga old me nhi 
// ..rest operator or spread operator 
let arr9=[1,2,3,4,8];
let arr10 = [...arr9]
arr10.push(2);
console.log(arr9)
console.log(arr10);

// //8.filter
// let arr11 = [1,2,3,4,8];
// let ansArray1=arr11.filter((number)=>{
//     return number %2==0;

//     // if(number%2==0){
//     //     return true;

//     // }
//     // else{
//     //     return false;
//     // }
// })
// console.log(ansArray1);

//9.reduce
let arr12 = [10,20,30,40];
let ans1 = arr12.reduce((acc,curr)=>{
    return acc+curr;
},1)

console.log(ans1);

//10.sort
let arr13 =[9,7,8,6]
// let arr14=arr13.sort();
arr13.sort(function(a,b){
    return b-a;
})
console.log(arr13);



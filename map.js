// given an array,give me bak a new array in which every value is multiplied by 2
// let inputArray = [2,3,4,5,6];
// // let outputArray =[]
// // for(let i = 0;i<inputArray.length;i++){
// //   outputArray.push(inputArray[i]*2)
// // }
// // console.log(outputArray)

// //  OTHER SOLUTION

// let newarr = inputArray.map( (item)=>{
//   return item*2})
// console.log(newarr)

// // SAME IN DIFFERENT STYLE
// let a =[1,2,3,4,5,6]
// function transform(item){
//   return item*item;
// }

// console.log(a.map(transform))

const arr = [1, 2, 3, 4, 5];
const ans = arr.map((n) => {
  return n * n;
});
console.log(ans);
// clearly returning an array
//is forEach and map same ???
//let's see
let ans2 = ans.forEach((n) => {
  return n - 100;
});
console.log(ans2);

ans2 = ans.map((n) => {
  return n - 100;
});
console.log(ans2);
//Differences between forEach() and map() methods:
// The forEach() method does not returns a new array based on the given array. The map() method returns an entirely new array. The forEach() method returns “undefined“. The map() method returns the newly created array according to the provided callback function

//ASSIGNMENT

//create a map fu nction that takes 2 inputs
//an array,and a transformation callback/fn
//and transform the array into a new one using transformation fn

// create a map function that takes an array and a transform fn as input and returns the transformed arrays as ouput
// const Arrayy = [1,2,3,4,5]
// function transform(i){
//   console.log(i)
// }
// const ans= Arrayy.map((Arrayy,transform)=>{
//   let transformedArray = [];
//   for(let i = 0;i<Arrayy.length;i++){
//     transformedArrayy.push(Arrayy[i])
//     console.log(transformed)
//   }
//   return transformedArray;
// })
// console.log(ans)
 
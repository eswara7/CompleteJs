//what if i tell u,given an input array give me back all the even values from it
const arr = [1,2,3,4,5]
// const newarr=[]
// for(let i=0;i<arr.length;i++){
//   if(arr[i]%2==0){
//     newarr.push(arr[i])
//   }
// };
// console.log(newarr)

//filter

// function filterLogic(n){
//   if(n%2==0){
//     return true
//   }
//   else{
//     return false
//   }
// } 
// const ans = arr.filter(filterLogic)
// console.log(ans)

const ans = arr.filter((n)=>{
  return n%2==0;
})
console.log(ans)
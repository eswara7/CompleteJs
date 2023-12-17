/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/


function wait(n){
  return new Promise(function(resolve){
    setTimeout(()=>{
      console.log(n+" seconds passed")
    },n)

  })}
  wait(5).then()
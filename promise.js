
const p = new Promise(function(resolve){
  console.log("hi there i'm in promise")

  resolve();
})
const ans = p.then(function(){ console.log("hey there")})


// the promise takes a function as an argument,
// that function takes resolve as an argument,
// that resolve takes something as an argument,
// The .then() then takes a function as an argument,
// that function takes something as an argument(say VALUE)
// and whatever was passed to resolve is passed as VALUE
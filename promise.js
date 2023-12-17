const p = new Promise(function(resolve){
  console.log("hi there i'm in promise")
  
  resolve();
})
const ans = p.then(function(){ console.log("hey there")})


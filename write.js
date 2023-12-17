// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');
function WriteFile(){
  let data="i am writing something inside promise";
  return new Promise(function(resolve){
    fs.writeFile('write.txt',data,function(err,data){
      
      console.log("inside a promise")
    })
    
  })

  
}
WriteFile().then(console.log("written successful"))
// File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```
const fs = require('fs');
function FileCleaner(){
  return new Promise(function(resolve){
    fs.readFile('Filecleaner.txt','utf-8',function(err,data){
      data = data.replace(/\s+/g, ' ').trim();
      resolve(data);
    })
  })
}
FileCleaner().then((data)=>{
  console.log(data)
  console.log("editing successful")})
/*const initialArray=[1,2,3];
function ADD3(str){
  str=str+3;
  console.log(str)
}
initialArray.forEach(ADD3)*/
function OrderFood(eat){
  setTimeout(eat,3000)
  console.log("order is ready")
}
function eat(){
  console.log("food is delicious")
}

OrderFood(eat);
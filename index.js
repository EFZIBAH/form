let options = ["1","@"];

function empty() {
  if (document.getElementById("fname").value== ""){
    document.getElementById("demo1").innerHTML= "input name";
    return false;
  }
  if (document.getElementById("fname").value.includes(a)){
    document.getElementById("demo1").innerHTML= "must include @";
    return false;
  }
  else{
  return true

 }

}


function validate(){

  let password = document.getElementById("password");
  let isValid = validatePassword(password);
  if(isValid){
    alert("login succesfully");
        
    document.logPass.action = "./menu.html"; 
    document.logPass.submit();
  }
  else{
    document.getElementById("error").innerHTML = "Error";
  }
}

function validatePassword(passTest){

  var passworkRegexp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

  let result = passworkRegexp.test(passTest.value);
  return result;

}
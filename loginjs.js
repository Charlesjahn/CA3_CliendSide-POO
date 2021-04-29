
function validate(){

  let password = document.getElementById("password"); //will get the password
  let isValid = validatePassword(password); // it will match the password, and get a boolean value

  if(isValid){ // in case is true, password is valid
    alert("login succesfully");
        
    document.logPass.action = "./menu.html"; 
    document.logPass.submit();
  }
  else{ // in case is false, password is not valid, it will show a menssage
    document.getElementById("error").innerHTML = "Your password must contain:<br>"+
    "At least one capital letter.<br>"+
    "At least one number.<br>"+
    "At least one special character (! @ # \ $% \ ^ & \ *).<br>"+
    "At least 8 (eight) characters.<br>";
  }
}

function validatePassword(passTest){
  //will get the password and matchs
  var passworkRegexp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

  let result = passworkRegexp.test(passTest.value);
  return result; // it will return a boolean value

}
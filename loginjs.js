function validate()
{    /**Get staff`s name and password, to valid the user*/
    var staffname = document.getElementById("staffname").value;
    var password = document.getElementById("password").value;
    
    /**It will change the direction of the page, in case name and password is right*/
    if(staffname == "admin" && password == "user"){
        alert("login succesfully");
        
        document.logPass.action = "menu.html"; 
        document.logPass.submit();
    }
    /**It will remain in the login page, in sace name and password were wrong */
    else{
        alert("login failed");
        return false;
    }
}
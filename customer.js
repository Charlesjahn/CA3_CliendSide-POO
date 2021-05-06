async function getUser() {
    const response = await fetch(
      // get what have on web site and save as response
      "https://randomuser.me/api/?results=5 & ?nat=br,us,fr,es"
    ).catch((err) => console.log(err)); // show if is there a error
  
    const json = await response
      .json() // take the reponse and make a JSON
      .catch((err) => console.log(err)); // show if is there a error
  
    var users = "<br>"; // //initiates a variablel to show the user API
  
    for (var i = 0; i < json.results.length; i++) {
      // it will loop for the quantity of user there is on json
  
      users += // it will get the information from the json 
        json.results[i].name.title +". " + json.results[i].name.first +" "+ json.results[i].name.last +
        "<br><img src='" + json.results[i].picture.medium +
        "'>" +
        "<br>E-mail: " + json.results[i].email +
        "<br>Phone number: " + json.results[i].phone +
        "<br>Age: " + json.results[i].dob.age +
        "<br>City: " + json.results[i].location.city +
        "<br>Country: " + json.results[i].location.country +
        "<br>PostCode: " + json.results[i].location.postcode +
        "<hr>";
    }
  
    document.getElementById("ramdonUser").innerHTML = users; // input the user on website
}
  
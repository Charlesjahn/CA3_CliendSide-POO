async function getUser() {
    const response = await fetch(
      // pega o que tiver no site e guarda como response
      "https://randomuser.me/api/?results=5 & ?nat=br,us,fr,es"
    ).catch((err) => console.log(err)); // mostra o erro se tiver algum
  
    const json = await response
      .json() // pega a resposta do site em forma de JSON
      .catch((err) => console.log(err)); // mostra o erro se tiver algum
  
    var users = "<br>"; // inicia a variavel users pra mostrar no site os usuarios criados pelo API
  
    for (var i = 0; i < json.results.length; i++) {
      // pode usar 5 ou quantos tu pegar no json
  
      users += // adiciona as informacoes a variavel users q vai ser usada pra mostrar no site
        json.results[i].picture.medium.url="https://randomuser.me/api/portraits/med/women/55.jpg" + "<br>"+
        "Customer: " +
        json.results[i].name.title +". " + json.results[i].name.first +" "+ json.results[i].name.last +
        "<br>Customer Code: " +
        json.results[i].location.postcode +
        "<hr>";
    }
  
    document.getElementById("ramdonUser").innerHTML = users; // mostra a variavel users no site
}
  
(async function getJSON(){
    //getting the information from the website
    const response = await fetch(
        "https://randomuser.me/api/?results=5"
    ).catch((err) => console.log(err));

    //transforming the response in JSON.
    const json = await response.json().catch((err) => console.log(err));

    //
    let customers = [];

    for(var i = 0; i< json.results.length; i++){
       // creating the customers
        customers[i] = json.results[i];

    }
    return customers;
})();

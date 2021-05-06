//Array for topic of options
var type = ["STARTERS", "MAIN", "DESERTS", "DRINK"];

//Array for list of option
var options = ["Mixed Salads", "Coked eggs", "French fries/Chips", "A la Minute", "Chicken Risotto", "Stroganoff Of Soy", "Fruit Salad", "Sweet Pudim", "Sweet Rise", "Hot Drinks (hot chocolate, coffe & tea)", "Soft Drinks (Coke,Fanta,7up & Sprite)", "Glass of wine (Pinot, Merlot & Cabernet)"];

//Array for prices
var price = [" 2.00", "0.30", "3.50", "10.30", "8.50", "12.00", "3.50", "4.00", "3.00", "3.50", "2.50", "5.50",];


var sum = 0; //variable sum to total price
var ciclo = 0;

(function () {
  var div = document.getElementById('menuClassDiv');
  let tbl = document.createElement('table'); // create a table
  let tbdy = document.createElement('tbody'); // create a table body

  let buttoms = []; 

  for (var x = 0; x < 4; x++) { // loop to create 4 categories "options"

    for (var i = 0; i < 4; i++) { // loop to create 4 row
      var tr = document.createElement('tr'); // create rows

      for (var j = 0; j < 7; j++) {  // loop to create columns 

        if (i == 0 && j == 1) { // it will take the first row, and creat a title
          i == 0 && j == 1 ? td.setAttribute('colSpan', '7') : null; // merge the columns 
          td.setAttribute('class', 'optionTitle');
          td.appendChild(document.createTextNode(type[x])) // it will get a title on array topic
          break

        } else {
          switch (j) {
            case 1: // on first column will be create a button ADD, set the attributes and call a function
              buttoms[ciclo] = document.createElement('button');
              buttoms[ciclo].setAttribute('type', 'button');
              buttoms[ciclo].setAttribute('class', 'buttonAdd');
              buttoms[ciclo].setAttribute('id', 'buttonAdd' + (ciclo+1));
              buttoms[ciclo].onclick = (function (ciclo) { return function() {add(ciclo);} }) (ciclo);

              j == 1 ? buttoms[ciclo].appendChild(document.createTextNode('+ Add')) : null;
              j == 1 ? td.appendChild(buttoms[ciclo]) : null;
              ciclo++;
              break;

            case 2: // set the a numero for a dish
              j == 2 ? td.appendChild(document.createTextNode(ciclo + ":")) : null;
              break;

            case 3: // it will take from a array option and input the name of dish on table
              j == 3 ? td.appendChild(document.createTextNode(options[ciclo - 1])) : null;
              j == 3 ? td.setAttribute('class', 'optionDish') : null;
              break;

            case 4: // space to add image of each dish
              j == 4 ? td.setAttribute('id', 'image' + ciclo) : null;
              j == 4 ? td.setAttribute('class', 'tdImag') : null;
              break;

            case 5: // type of money €
              j == 5 ? td.appendChild(document.createTextNode("€")) : null;
              break;

            case 6: // get a price form array price and input on table
              j == 6 ? td.appendChild(document.createTextNode(price[ciclo - 1])) : null;
              j == 6 ? td.setAttribute('id', 'price' + ciclo) : null;
              break;
          }
          var td = document.createElement('td');
          tr.appendChild(td)
        }
      }
      tbdy.appendChild(tr);
    }
  }
  tbl.appendChild(tbdy);
  div.appendChild(tbl);
})();

function add(i) { // function to ADD, it will receive a number of VAR Ciclo

  let orders = options[i]; // it wil get the dish
  var para = document.getElementById('pTotal').innerHTML;

  
  if (sum == 0){ // this if/else is to write the order following for the price and name of the dish
    document.getElementById('pTotal').innerHTML ="€" + price[i] + " = "+orders;
  }else{
    
    para += "<br>" + "€" + price[i] +" = "+ orders;
    document.getElementById('pTotal').innerHTML = para;
  }

  sum += parseFloat(price[i]); // add the valor of the order

  document.getElementById("totalprice").innerHTML = "€ " + sum.toFixed(2); // it will print the option that the sustomer is requesting
};

function newOrder(){ // function reset the order, or create a new one
  sum = 0;
  document.getElementById('pTotal').innerHTML = "";
  document.getElementById("totalprice").innerHTML = "€ " + sum.toFixed(2);
}

(function addImage(){ // it will put the image on witch dish

  document.getElementById("image1").innerHTML = "<img src='image/vegan.png'>";
  document.getElementById("image2").innerHTML = "<img src='image/eggs.png'>";
  document.getElementById("image3").innerHTML = "<img src='image/vegan.png'>";
  document.getElementById("image4").innerHTML = "<img src='image/beaf.png'><img src='image/eggs.png'>";
  document.getElementById("image5").innerHTML = "<img src='image/chiken.png'><img src='image/eggs.png'> ";
  document.getElementById("image6").innerHTML = "<img src='image/vegan.png'>";
  document.getElementById("image7").innerHTML = "<img src='image/vegan.png'>";
  document.getElementById("image8").innerHTML = "<img src='image/milk.png'><img src='image/eggs.png'>";
  document.getElementById("image9").innerHTML = "<img src='image/milk.png'>";



})();
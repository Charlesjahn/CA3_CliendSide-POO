//Array for topic of options
var tipo = ["STARTERS", "MAIN", "DESERTS", "DRINK"];

//Array for list of option
var options = ["Mixed Salads", "Coked eggs", "French fries/Chips", "A la Minute", "Chicken Risotto", "Stroganoff Of Soy", "Fruit Salad", "Sweet Pudim", "Sweet Rise", "Hot Drinks (hot chocolate, coffe & tea)", "Soft Drinks (Coke,Fanta,7up & Sprite)", "Glass of wine (Pinot, Merlot & Cabernet)"];

//Array for prices
var price = [" 2.00", "0.30", "3.50", "10.30", "8.50", "12.00", "3.50", "4.00", "3.00", "3.50", "2.50", "5.50",];


var sum = 0;
var ciclo = 0;

(function () {
  var div = document.getElementsByTagName('div')[0];
  let tbl = document.createElement('table');
  let tbdy = document.createElement('tbody');

  let buttoms = [];

  for (var x = 0; x < 4; x++) {

    for (var i = 0; i < 4; i++) {
      var tr = document.createElement('tr');

      for (var j = 0; j < 7; j++) {
        console.log(ciclo);

        if (i == 0 && j == 1) {
          i == 0 && j == 1 ? td.setAttribute('colSpan', '7') : null;
          td.setAttribute('class', 'optionTitle');
          td.appendChild(document.createTextNode(tipo[x]))
          break

        } else {
          switch (j) {
            case 1:
              buttoms[ciclo] = document.createElement('button');
              buttoms[ciclo].setAttribute('type', 'button');
              buttoms[ciclo].setAttribute('class', 'buttonAdd');
              buttoms[ciclo].setAttribute('id', 'buttonAdd' + (ciclo+1));
              buttoms[ciclo].onclick = (function (ciclo) { return function() {add(ciclo);} }) (ciclo);

              j == 1 ? buttoms[ciclo].appendChild(document.createTextNode('+ Add')) : null;
              j == 1 ? td.appendChild(buttoms[ciclo]) : null;
              ciclo++;
              break;

            case 2:
              j == 2 ? td.appendChild(document.createTextNode(ciclo + ":")) : null;
              j == 2 ? td.setAttribute('class', 'optionNum') : null;
              break;

            case 3:
              j == 3 ? td.appendChild(document.createTextNode(options[ciclo - 1])) : null;
              j == 3 ? td.setAttribute('class', 'optionDish') : null;
              break;

            case 5:
              j == 5 ? td.appendChild(document.createTextNode("€")) : null;
              break;

            case 6:
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

function add(i) {

  let orders = options[i];
  var div = document.getElementById('pTotal').innerHTML;

  
  if (sum == 0){
    document.getElementById('pTotal').innerHTML ="€" + price[i] + " = "+orders;
  }else{
    
    div += "<br>" + "€" + price[i] +" = "+ orders;
    document.getElementById('pTotal').innerHTML = div;
  }




  sum += parseFloat(price[i]);

  document.getElementById("totalprice").innerHTML = "€" + sum.toFixed(2);
};
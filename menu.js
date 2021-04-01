function tableCreate() {

    //Array for topic of options
    let tipo = ["STARTERS","MAIN","DESERTS","DRINK"]
    //Array for list of option
    let options =["Mixed Salads","Coked eggs","French fries/Chips","A la Minute","Chicken Risotto","Stroganoff Of Soy","Fruit Salad","Sweet Pudim","Sweet Rise","Hot Drinks (hot chocolate, coffe & tea)","Soft Drinks (Coke,Fanta,7up & Sprite)","Glass of wine (Pinot, Merlot & Cabernet)"]
    //Array for prices
    let price = ["2,00","0,30","3,50","10,30","8,50","12,00","3,50","4,00","3,00","3,50","2,50","5,50",]

    var buttonAdd = document.createElement("buttom");
    var div = document.getElementsByTagName('div')[0];
    var tbl = document.createElement('table');
    var tbdy = document.createElement('tbody');
    
    tbl.setAttribute('border', '0');
    

    var ciclo = 0;
    for(var x = 0; x < 4; x++){
      for (var i = 0; i < 4; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 7; j++) {
          if (i == 0 && j == 1 ) {
              i == 0 && j == 1 ? td.setAttribute('colSpan', '7') : null;
              td.setAttribute('class','optionTitle');
              td.appendChild(document.createTextNode(tipo[x]))
              
            break
          } else{
            switch(j) {
              case 1:
                var button = document.createElement('button');
                button.setAttribute('type','button');
                button.setAttribute('class','button');
                button.onclick = function() {add();}
                j == 1 ? button.appendChild(document.createTextNode('ADD')): null;
                j == 1 ? td.appendChild(button): null;
                ciclo++;
                
              case 2:
                j == 2 ? td.appendChild(document.createTextNode(ciclo +":")): null;
                j == 2 ? td.setAttribute('class','optionNum'): null;
                
              case 3:
                j == 3 ? td.appendChild(document.createTextNode(options[ciclo-1])): null;
                j == 3 ? td.setAttribute('class','optionDish'): null;
              case 5:
                j == 5 ? td.appendChild(document.createTextNode("€")): null;
              case 6:
                j == 6 ? td.appendChild(document.createTextNode(price[ciclo-1])): null;
                j == 6 ? td.setAttribute('id','price'): null;
              
                break;
              default:
                // code block
                
            }
            var td = document.createElement('td');
            tr.appendChild(td)
          }
        }
        tbdy.appendChild(tr);
      }
    }
    tbl.appendChild(tbdy);
    div.appendChild(tbl)
  }tableCreate();

  function add(){
    var option = getElementsById("price");
    alert(option);
  } ;
  
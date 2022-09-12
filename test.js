//My own test
function changeHam(x) {
    x.classList.toggle("change");
}

function validate() {
  var sentence = "You ordered a ";
  var price = 0;
  if(document.getElementById('pTypes').selectedOptions[0].value == "cheese"){
    price += 5.80;
  }
  else if(document.getElementById('pTypes').selectedOptions[0].value == "thin"){
    price += 8.00;
  }
  else if(document.getElementById('pTypes').selectedOptions[0].value == "grandma"){
    price += 12.50;
  }
  else if(document.getElementById('pTypes').selectedOptions[0].value == "sicilian"){
    price += 19.00;
  }

  if(document.getElementById('tTypes').selectedOptions[0].value == "plain"){
    price += 0;
  }
  else if(document.getElementById('tTypes').selectedOptions[0].value == "olives"){
    price += 1.25;
  }
  else if(document.getElementById('tTypes').selectedOptions[0].value == "pepperoni"){
    price += 3.27;
  }
  else if(document.getElementById('tTypes').selectedOptions[0].value == "pinapple"){
    price += 4.18;
  }
  else if(document.getElementById('tTypes').selectedOptions[0].value == "meatball"){
    price += 8.44;
  }

  sentence += document.getElementById('pTypes').selectedOptions[0].value + " pizza. You picked ";
  if(document.getElementById('tTypes').selectedOptions[0].value == "plain") {
    sentence += "no topping.<br>Your total is $" + price.toFixed(2);
  }
  else {
    sentence += "the " + document.getElementById('tTypes').selectedOptions[0].value + " topping.<br>Your total is $" + price.toFixed(2);
  }
  document.getElementById("submit").innerHTML = sentence;
}

//I MADE THIS
var element = document.getElementById("navbarG");
function classChange(el) {
  
  if(element.classList.contains("active")) {
    element.classList.remove("active");
  }
  el.classList.add("active");
  element = el;
}
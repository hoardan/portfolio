document.getElementById('order').onclick = function() {
    sentence = "You picked ";
    var radios = document.getElementsByName('pTypes');
    for (var radio of radios)
    {
        if (radio.checked) {
            sentence += radio.value;
        }
    }
    sentence += "  pizza with ";
    var radios = document.getElementsByName('tTypes');
    for (var radio of radios)
    {
        if (radio.checked) {
            sentence += radio.value + " ";
        }
    }
    sentence += checkToppings() + "  toppings.";
    document.getElementById('submit').innerHTML = sentence + " You owe $" + checkPrice().toFixed(2);
}

document.getElementById('veggie').onclick = function() {
    deselectBoxes();
    document.getElementById('thin').checked = true;
    document.getElementById('mushroom').checked = true;
    document.getElementById('onions').checked = true;
    document.getElementById('peppers').checked = true;
}

document.getElementById('chicago').onclick = function() {
    deselectBoxes();
    document.getElementById('cheese').checked = true;
    document.getElementById('meatball').checked = true;
    document.getElementById('mushroom').checked = true;
}

document.getElementById('everything').onclick = function() {
    deselectBoxes();
    document.getElementById('thin').checked = true;
    document.getElementById('mushroom').checked = true;
    document.getElementById('onions').checked = true;
    document.getElementById('peppers').checked = true;
    document.getElementById('pineapple').checked = true;
    document.getElementById('meatball').checked = true;
}

function checkPrice() {
    var price = 17.00;
    if(document.getElementById('thick').checked == true)
        price += 2.30;
    if(document.getElementById('cheese').checked == true)
        price += 3.15;
    if(document.getElementById('meatball').checked == true)
        price += 2.10;
    if(document.getElementById('mushroom').checked == true)
        price += 4.50;
    if(document.getElementById('pineapple').checked == true)
        price += 5.40;
    if(document.getElementById('peppers').checked == true || document.getElementById('onions').checked == true)
        price += 1.80;
    var tax = price * .08675;
    return price + tax;
}

function checkToppings() {
    var sentence = " no"
    if(document.getElementById('meatball').checked == false && document.getElementById('mushroom').checked == false 
    && document.getElementById('pineapple').checked == false && document.getElementById('peppers').checked == false 
    && document.getElementById('onions').checked == false)
        return sentence;
    else
        return "";
}

function deselectBoxes() {
    document.getElementById('thin').checked = false;
    document.getElementById('mushroom').checked = false;
    document.getElementById('onions').checked = false;
    document.getElementById('peppers').checked = false;
    document.getElementById('pineapple').checked = false;
    document.getElementById('meatball').checked = false;
}
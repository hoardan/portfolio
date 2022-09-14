//for the navbar
var element = document.getElementById("navbarG");
function classChange(el) {
  if(element.classList.contains("active")) {
    element.classList.remove("active");
  }
  el.classList.add("active");
  element = el;
}

//for the image that copies to clipboard
function copyDisc() { 
  const elem = document.createElement('textarea');
  elem.value = "@hoardan#6969";
  document.body.appendChild(elem);
  elem.select();
  document.execCommand('copy');
  document.body.removeChild(elem);
  alert("copied discord name");
} 

//need php to send emails out
//update
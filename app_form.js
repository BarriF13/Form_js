// alert("ouch")
// var form = document.getElementById("register");

// form.onsubmit = function(){
//   alert("it is working");
//   return false;
// }
//selecting the form --
var form ={
  register: document.getElementById("register"),
  email: document.getElementById("email"),
  pass1: document.getElementById("pass1"),
  pass2: document.getElementById("pass2"),
};
//now we are giving an event
form.register.addEventListener("submit", checkform);

function checkform(e){
  alert("it is working");
  e.preventDefault();
}

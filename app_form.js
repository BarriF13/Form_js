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
form.pass1.addEventListener("keypress", nospace);
form.pass2.addEventListener("keypress", nospace);
form.pass1.addEventListener("keyup", passwordstrength);



//checking the email format//setting up RegEx
var reemail=/^[a-z0-9]+@[a-z]+\.+[a-z]{2,4}$/;//"test1234@gmail.com"

function checkform(e){
  //alert(form.email.value);//getting the input email
  //evaluate email form

  var msg ="";
  if(!reemail.test(form.email.value)){

    msg+="Your email";
  }
  e.preventDefault();
}

function nospace(e){
  //space charcode is 32
  //alert(e.charCode);
  if (e.charCode == 32){
    e.preventDefault();
  }
}

function passwordstrength(e){
  var pass = form.pass1.value;
  alert(pass);
}
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
//checking the email format//setting up RegEx
var reemail=/^[a-z0-9]+@[a-z]+\.+[a-z]{2,4}$/;//"test1234@gmail.com"

function checkform(e){
  //alert(form.email.value);//getting the input email

  if(!reemail.test(form.email.value)){

    alert('This is not a correct email address')
  }
  else {
    alert('Your email is accepted')
  }
  e.preventDefault();
}

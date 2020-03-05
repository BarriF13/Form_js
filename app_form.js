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
  strength: document.getElementById("strength")
};

//now we are giving an event
form.register.addEventListener("submit", checkform);
form.pass1.addEventListener("keypress", nospace);
form.pass2.addEventListener("keypress", nospace);
form.pass1.addEventListener("keyup", passwordstrength);
form.pass2.addEventListener("keyup", passMatch);



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

var strText = ['weak', 'average', 'strong'];
var strColor = ['#cc0','#f00','#080']

function passwordstrength(e){
  var pass = form.pass1.value;
  // alert(pass);
  //setting up uppercase Regex
  var uc = pass.match(/[A-Z]/g);
  uc = (uc&&uc.length || 0);

  var nm= pass.match(/\d/g);
  nm=(nm&&nm.length || 0);

  var nw = pass.match(/W/g);
  nw = (nw&&nw.length || 0);

  var s=pass.length+uc+(nm*2)+(nw*3);
  s = Math.min(Math.floor(s/10),2);//s is now my password strength

  //now setting up the color and text for password strength

  form.strength.textContent = strText[s];
  form.strength.style.color = strColor[s];

}
function passMatch(){
    var pmatch1 = form.pass1.value
    var pmatch2 = form.pass2.value
    if (pmatch1 == pmatch2){
      alert("matched");
    } else{
      alert("Your passwords do not match!!!");
    }
}
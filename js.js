const signUpForm = document.getElementById('signUpForm');
const emailField = document.getElementById('FirstNameField');
const emailField = document.getElementById('LastNameField');
const emailField = document.getElementById('emailField');
const okButton = document.getElementById('okButton');


// FirstNameField.addEventListener("keyup", function (event) {
//   if (document.getElementById("fname").value==="") {
//     okButton.disabled = true;
//   }
//   else {
//     okButton.disabled = false;
//   }
// }
// );
// LastNameField.addEventListener("keyup", function (event) {
//   if (document.getElementById("lname").value ===   ""){
//     okButton.disabled = true;
//   }
//   else{
//     okButton.disabled = false;
//   }
// }
// );

emailField.addEventListener('keyup', function (event) {
  isValidEmail = emailField.checkValidity();

  if (isValidEmail) {
    okButton.disabled = false;
  }
  else {
    okButton.disabled = true;
  }
});
okButton.addEventListener('click', function (event) {
  signUpForm.submit();
});

function enableControls() { 
  vid.controls = true;
  vid.load();
} 
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Give prompts to the user. / Password length / lower uper case, special characters numbers.

function generatePassword() {
  var passLength = prompt("How long of a password would you like to generate? (Must select between 8 and 128 characters)")
  if (passLength >= 8 && passLength <= 128) {
  } else {
    alert("Must select a number between 8 and 128");
    generatePassword();
  };
  var typeOfCharacters = confirm("Would you like to use special characters? ( ! @ # $ % ^ & * )");
  var capitalLetters = confirm("Would you like to use capital letters?");
}


//
// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(passwordText)

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

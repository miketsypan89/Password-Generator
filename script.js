var passLength = 8;
var choiceArr = [];

// Assigning a pool of characters we can use as our options:
var specialCharArr = ["!", "@", "#", "$", "%", "^", "&", "*"];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPromps = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPromps) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  // I would generatePassword based on these prompts
  var password = "";
  for (var i = 0; i < passLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts() {
  choiceArr = [];

  passLength = parseInt(prompt("How long of a password would you like to generate? (Must select between 8 and 128 characters)", "50"))

  // This is a rule to ensure that the user can only enter numbers between 8 and 128.
  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert("You MUST select a number between 8 and 128");
    return false;
  }
  var lowerCaseConfirm = confirm("Would you like to use lower case letters?");
  var upperCaseConfirm = confirm("Would you like to use upper case letters?");
  var specialCharConfirm = confirm("Would you like to use special characters? ( ! @ # $ % ^ & * )");
  var numberConfirm = confirm("Would you like to use numbers?");

  // This is a rule to ensure the user is alerted when all of the criteriars were declined. 
  if (!lowerCaseConfirm && !upperCaseConfirm && !specialCharConfirm && !numberConfirm) {
    alert("Since you didn't select any criteria, we have nothing to generate your password from. Please try again!")
    return false;
  }

  // This will ensure to concat (aka merge) the option that the user selects, and thows they into the array for the result.
  if (lowerCaseConfirm) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (upperCaseConfirm) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if (specialCharConfirm) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  if (numberConfirm) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}
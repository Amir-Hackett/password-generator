// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var arrayNumeric = ['0','1', '2', '3', '4','5', '6', '7', '8', '9']
var arraySpecialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')',]
var arrayUpper = ['A','B','C','D','E',]
var arrayLow = ['a','b','c','d','e', ]

function randomizeArray(array) {
var selectIndex = Math.floor(Math.random() * array.length)
var trueIndexValue = array [selectIndex]
return trueIndexValue
}

function generatePassword () {
  var numberOfCharacters = window.prompt("How many characters would you like your password to contain?");
  var characterQuanity = parseInt(numberOfCharacters);
  if (characterQuanity >= 8 && characterQuanity <= 128) {
    
    for( var i = 0; i < characterQuanity; i++);{
    }
  }

  var upperCase = window.confirm("Would you like to use uppercase case?");
  var lowerCase = window.confirm("Would you like to use lower case?");
  var numeric = window.confirm("Would you like to use numbers?");
  var specialChar = window.confirm("Would you like to use special characters?");

  var results = {
    confirmCharacterQuanity: confirmCharacterQuanity,
    confirmUppercase: upperCase, 
    confirmLowerCase: lowerCase,
    confirmNumeric: numeric,
    confirmSpecialChar: specialChar,
  };
console.log(results)
  return results;
}
//console.log(generatePassword().results.confirmUppercase)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
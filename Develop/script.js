// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var arrayNumeric = ['0','1', '2', '3', '4','5', '6', '7', '8', '9']
var arraySpecialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')',]
var arrayUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var arrayLow = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function randomizeArray(array) {
var selectIndex = Math.floor(Math.random() * array.length)
var trueIndexValue = array[selectIndex]
return trueIndexValue
}

function userQuestions () {
  var numberOfCharacters = window.prompt("How many characters would you like your password to contain?");
  var characterQuanity = parseInt(numberOfCharacters);
 
  if (characterQuanity < 8 || characterQuanity > 128) {
    alert("You must type a number between 8 and 128.")
    return userQuestions();
  }

  var upperCase = window.confirm("Would you like to use uppercase case?");
  var lowerCase = window.confirm("Would you like to use lower case?");
  var numeric = window.confirm("Would you like to use numbers?");
  var specialChar = window.confirm("Would you like to use special characters?");

  var results = {
    confirmCharacterQuanity: characterQuanity,
    confirmUppercase: upperCase, 
    confirmLowerCase: lowerCase,
    confirmNumeric: numeric,
    confirmSpecialChar: specialChar,
  };
console.log(results)
  return results;
}

function generatePassword(){
  var userResponse = userQuestions()
  var possilbleCharacters = []
  var newPassword = []

 if (userResponse.confirmUppercase === true){
   possilbleCharacters = possilbleCharacters.concat(arrayUpper)
   possilbleCharacters.push(randomizeArray(arrayUpper))
 }

 if (userResponse.confirmLowerCase === true){
   possilbleCharacters = possilbleCharacters.concat(arrayLow)
   possilbleCharacters.push(randomizeArray(arrayLow))
 }

 if (userResponse.confirmNumeric === true){
   possilbleCharacters = possilbleCharacters.concat(arrayNumeric)
   possilbleCharacters.push(randomizeArray(arrayNumeric))
 }

 if (userResponse.confirmSpecialChar === true) {
  possilbleCharacters = possilbleCharacters.concat(arraySpecialChar)
  possilbleCharacters.push(randomizeArray(arraySpecialChar))
}

for( var i = 0; i < userResponse.confirmCharacterQuanity; i++) {
 var stagedArray = randomizeArray(possilbleCharacters)
 newPassword.push(stagedArray)
}
console.log(newPassword)
return newPassword.join('')
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var finalPassword = ""
  var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVYXYZ"
  var lowerCaseCharacters = "abcdefghijklmnopwqrstuvyxyz"
  var numberCharacters = "0123456789"
  var specialCharacters = "!@#$%^&*()_+"

  var passwordSize = prompt("what is the size of your password greater than 8 and less than 128")

  passwordSize = parseInt(passwordSize)
  if (passwordSize >= 8 && passwordSize <= 128) {
    var isLowerCase = confirm("does this password have lowercase")

    var isUpperCase = confirm("does this password have uppercase")

    var isSpecialCharacter = confirm("does this password have special character")

    var isNumber = confirm("does this password have numbers")
    
    for (let index =finalPassword.length; index <  passwordSize; index++) {
      if (isLowerCase && finalPassword.length <  passwordSize) {
        var position = Math.floor(Math.random() * lowerCaseCharacters.length)
        finalPassword = finalPassword + lowerCaseCharacters.charAt(position)
      }
      if (isUpperCase && finalPassword.length <  passwordSize) {
        var position = Math.floor(Math.random() * upperCaseCharacters.length)
        finalPassword = finalPassword + upperCaseCharacters.charAt(position)
      }
      if (isSpecialCharacter && finalPassword.length <  passwordSize) {
        var position = Math.floor(Math.random() * specialCharacters.length)
        finalPassword = finalPassword + specialCharacters.charAt(position)
      }
      if (isNumber && finalPassword.length <  passwordSize) {
        var position = Math.floor(Math.random() * numberCharacters.length)
        finalPassword = finalPassword + numberCharacters.charAt(position)
      } 
      
    }
     

  }
  else {
    alert("invalid Password")
  }







  return finalPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here
var passLength = " ";
var lowerCase = " ";
var upperCase = " ";
var numeric = " ";
var symbols = " ";




function getRandomLower() {
  
var getRandomLower = String.fromCharCode(Math.floor(Math.random() * 26 + 97));
console.log(getRandomLower);
lowerCase = getRandomLower;
console.log(lowerCase);
return lowerCase;
};



function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));

}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
   return symbols[Math.floor(Math.random() * symbols.length)];
} 

function passGen() {
  var promptPassGen = confirm("Would you like to generate a new password");
  console.log(promptPassGen);
  if (promptPassGen === true) {
    var selectLength = prompt("How long do you want your password to be? Please choose a number between 8 and 128.");
//    console.log(selectLength);
    passLength = selectLength;
    return passLength;
 };



};

passGen();
getRandomLower()
//console.log(passLength);
console.log(lowerCase);







/*
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

*/

/* if (promptPassGen === true) {
  var lowerCase = confirm("Would you like to include lower case letters?");
  console.log(lowerCase);
} else {
 return;
};

*/

// Assignment code here
var passLength = " ";
var lowerCase = " ";
var upperCase = " ";
var numeric = " ";
var symbolRandom = " ";

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};


function getRandomLower() {
var getRandomLower = String.fromCharCode(Math.floor(Math.random() * 26 + 97));
lowerCase = getRandomLower;
return lowerCase;
};



function getRandomUpper() {
  var getRandomUpper = String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  upperCase = getRandomUpper;
  return upperCase;
};

function getRandomNumber() {
  var getRandomNumber = String.fromCharCode(Math.floor(Math.random() * 10 + 48));
  numeric = getRandomNumber;
 return numeric; 
};

function getRandomSymbol() {
  var symbolRandom = " ";
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  
  for (var i = 0; i < 5; i++)
  symbolRandom += symbols.charAt(Math.floor(Math.random() * symbols.length));
   symbolRandom = symbols;
   console.log(symbolRandom);
   return symbolRandom;
} ;

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
getRandomLower();
getRandomUpper();
getRandomNumber();
getRandomSymbol();
//console.log(passLength);
console.log(lowerCase);
console.log(upperCase);
console.log(numeric);
console.log(symbolRandom);







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

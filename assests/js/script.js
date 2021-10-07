// Assignment code here
var passLength = " ";
var lowerCase = " ";
var upperCase = " ";
var numeric = " ";
var symbolRandom = " ";
var choices = " ";
var passCond = " ";
var generateBtn = document.querySelector("#generate");

// const randomFunc = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   number: getRandomNumber,
//   symbol: getRandomSymbol
// };

// Generates a random lowercase character
function getRandomLower() {
	var getRandomLower = String.fromCharCode(Math.floor(Math.random() * 26 + 97));
	lowerCase = getRandomLower;
	return lowerCase;
};

// Generates a random uppercase character
function getRandomUpper() {
	var getRandomUpper = String.fromCharCode(Math.floor(Math.random() * 26 + 65));
	upperCase = getRandomUpper;
	return upperCase;
};

// Generates a random number 0-9
function getRandomNumber() {
	var getRandomNumber = String.fromCharCode(Math.floor(Math.random() * 10 + 48));
	numeric = getRandomNumber;
	return numeric;
};

// Generates a random symbol
function getRandomSymbol() {
	var length = 1
	var charset = "!@#$%^&*(){}[]=<>/,.";
	symbolRandom = "";
  var getRandomSymbol = confirm("Would you like to add symbols?");
  if (getRandomSymbol === true) {for (var i = 0, n = charset.length; i < length; ++i) {
    symbolRandom += charset.charAt(Math.floor(Math.random() * n));
      var choice = "Symbols";
    choices = choices.concat(choice)}
    
  }

};


// git checko


//  MAIN FUNCTION
function passGen() {
	var promptPassGen = confirm("Would you like to generate a new password");
	//console.log(promptPassGen);
	if (promptPassGen === true) {
		var selectLength = prompt("How long do you want your password to be? Please choose a number between 8 and 128.");
//	console.log(selectLength);
		// if (selectLength < 8 || selectLength > 128) {
		// 	alert("You must choose a number between 8 and 128!");
		// 	return false;
		// } else {
    passLength = selectLength;
      return passLength;
	};

};

function generatePassword() {
  passGen();
  console.log(passLength);
getRandomSymbol()
console.log(choices);
//   console.log(symbolRandom);  
//   getRandomUpper();
// getRandomNumber()
// getRandomSymbol();
// // console.log(passLength);
// console.log(lowerCase);
// console.log(upperCase);
// console.log(numeric);

// console.log(passLength);
};


generateBtn.addEventListener("click", function () {
	generatePassword();
});

// // //passGen();
//  getRandomLower();
// getRandomUpper();
// getRandomNumber()
// getRandomSymbol();
// console.log(passLength);
// console.log(lowerCase);
// console.log(upperCase);
// console.log(numeric);
// console.log(symbolRandom);

// console.log(passLength);


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
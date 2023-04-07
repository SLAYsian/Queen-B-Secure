// Assignment code here
"use strict";

// NOTES DEFINE VARIABLES
let pwLength;
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numeric = "0123456789";
let specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
let confirmLowercase;
let confirmUppercase;
let confirmNumeric;
let confirmSpecialChar;
let charSelections = "";
let password = "";

// // Get references to the #generate element ORIGINAL
var generateBtn = document.querySelector("#generate");

// // Add event listener to generate button ORIGINAL
generateBtn.addEventListener("click", writePassword);

// // Write password to the #password input ORIGINAL
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  // NOTES PROMPT TO ENTER PASSWORD LENGTH CONVERTING TO NUMBERS
  let pwLength = parseInt(
    prompt(
      `What is the desired length of your password? Please type a number between 8 and 128.`
    )
  );
  // NOTES TEST FOR CRITERIA
  if (isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
    alert(`Oh no! Your password is not a valid length, please try again!`);
    // NOTES RETURN ERROR MESSAGE
    return Error(`Invalid length, please try again.`);
    //NOTES Return confirmation
  } else confirm(`Great! Your password will be ${pwLength} characters long.`);

  // NOTES Confirm lowercase letters
  confirmLowercase = confirm(
    `Would you like to include lowercase letters in your password? If yes, click "🆗"! If no, click "Cancel".`
  );
  // NOTES Confirm uppercase letters
  confirmUppercase =
    confirm(`Would you like to include uppercase letters in your password? If yes, click "🆗"! if no, click "Cancel".
    `);

  // NOTES Confirm numeric
  confirmNumeric =
    confirm(`Would you like to include numbers in your password? If yes, click "🆗"! If no, click "Cancel".
    `);
  // NOTES Confirm Special Characters
  confirmSpecialChar =
    confirm(`Would you like to include special characters in your password? If yes, click "🆗"! If no, click "Cancel".
    `);
  // NOTES Make sure one character type was selected
  if (
    !confirmLowercase &&
    !confirmUppercase &&
    !confirmNumeric &&
    !confirmSpecialChar
  ) {
    // NOTES Alert with error message
    alert(
      `Oh no! No character sets were selected. Please try again, confirming at least one of the character sets!`
    );
    return Error(
      `Please choose at least one character set: 
      Lowercase: ${lowercase}
      Uppercase: ${uppercase}
      Numeric: ${numeric}
      Special character: ${specialChar})`
    );
  } else {
    alert(`Great! We are generating your secure password!`);
  }
  //NOTES: if confirm character set is true, add string to charSelections
  if (confirmLowercase) {
    charSelections += lowercase;
  }
  if (confirmUppercase) {
    charSelections += uppercase;
  }
  if (confirmNumeric) {
    charSelections += numeric;
  }
  if (confirmSpecialChar) {
    charSelections += specialChar;
  }
  // NOTES: for loop using to genertate random password using the charSelections and pwLenth
  for (let i = 0; i < pwLength; i++) {
    password += charSelections.charAt(
      Math.floor(Math.random() * charSelections.length)
    );
  }
  return password;
}

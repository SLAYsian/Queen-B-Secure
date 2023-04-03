// Assignment code here
"use strict";

// VARIABLES
let pwLength;
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numeric = "0123456789";
let specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"; // missing the \ and space
let confirmLowercase;
let confirmUppercase;
let confirmNumeric;
let confirmSpecialChar;
let charSelections;

// Get references to the #generate element ORIGINAL
// var generateBtn = document.querySelector("#generate");
document
  .querySelector("#generate")
  .addEventListener("click", function selectOptions() {
    // Prompt to enter password length
    let pwLength = parseInt(
      prompt(
        `What is the desired length of your password? Please type a number between 8 and 128.`
      )
    );
    // Test for criteria
    if (isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
      alert(
        `Oh no! Your password is not a valid length, please type a number between 8 and 128.`
      );
      return;
    } else confirm(`Great! Your password will be ${pwLength} characters long.`);

    // Confirm lowercase letters
    confirmLowercase = confirm(
      `Would you like to include lowercase letters in your password? If yes, click "Ok", if no, click "Cancel"!`
    );
    // Confirm uppercase letters
    confirmUppercase =
      confirm(`Would you like to include uppercase letters in your password? If yes, click "Ok", if no, click "Cancel"!.
    `);

    // Confirm numeric
    confirmNumeric =
      confirm(`Would you like to include numbers in your password? If yes, click "Ok", if no, click "Cancel"!.
    `);
    //Confirm Special Characters
    confirmSpecialChar =
      confirm(`Would you like to include special characters in your password? If yes, click "Ok", if no, click "Cancel"!
    `);
    alert(`Great! We are generating your password!`);
  });

// Write password to the #password input ORIGINAL
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// Add event listener to generate button ORIGINAL
// generateBtn.addEventListener("click", writePassword);

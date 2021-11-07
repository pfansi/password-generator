
// let declare and assign the all the characters that will compose the password 
var numberChar = "1234567890";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!@#$%^&*()_+{}:<>?\|[];\',./`~";

// let declare the user input variable 

var passLimit;
var confirmLowerChar;
var confirmUpperChar;
var confirmNumberChar;
var confirmSpecialChar;

// variable that will collect all the input in to a new variable 

var confirmInput;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button when clicked
generateBtn.addEventListener("click", writePassword);

// when cliked this function write down the password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//this function will generate password 
function generatePassword () {

    //prompt to ask user the number of character of the password
    passLimit = parseInt(prompt("How many digit would you like for your password to hold? Enter a number between 8 and 128"));
    // check if the digits have been entered correctly
    if (!passLimit) {
        alert("please enter a number between 8 and 128")
    } else if (passLimit < 8 || passLimit > 128) {
        // validate if the value of passlimit is between 8 and 128
        passLimit = parseInt(prompt("You must enter a number between 8 and 128"));
    } else {
        // confirm and assign all the additionnal characters that will compose the password to their variable
        confirmLowerChar = comfirm ("Would you like to include?");
        confirmNumberChar = confirm ("would like to include numbers?");
        confirmUpperChar = confirm ("Would like to include Uppercase?");
        confirmSpecialChar = confirm ("Would like to include Special characters?");
    };

    if (!confirmLowerChar && !confirmNumberChar && !confirmSpecialChar && !confirmUpperChar) {
        // if none of the characters have been choosen then alert this 

        confirmInput = alert ("You must choose at least one character set for your password");
    }
     
    // if a character choice is true , it will be concatenated into the new string confirminput
    if (confirmLowerChar) confirmInput = confirmInput.concat(lowercaseChar)
    if (confirmUpperChar) confirmInput = confirmInput.concat(uppercaseChar)
    if (confirmNumberChar) confirmInput = confirmInput.concat(numberChar)
    if (confirmSpecialChar) confirmInput = confirmInput.concat(numberChar)

    // declared the variable that will hold the return password characters in an array
    passwordArray = [];

    // this will loop ramdomly into the concatenated confirmInput array and 
    //pick charactyer that will fill the new passwordArray based on the character index in confirmInput
    for (var i=0; i < passLimit; i++) {
        var charIndex = confirmInput[Math.floor(Math.random() * confirmInput.lenght)];
        passwordArray.push(charIndex);
    }
    





}




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

    


}



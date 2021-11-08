// let declare the user input variables 
var confirmInput;
var confirmNumberChar;
var confirmSpecialChar;
var confirmUpperChar;
var confirmLowerChar;

// let declare and assign the all the characters that will compose the password 
specialChar = "!@#$%^&*()_+{}:<>?\|[];\',./`~";
numberChar = "1234567890";
lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";

// variable that will collect all the input in to a new variable 
var allChar;

var generate = document.querySelector("#generate");

generate.addEventListener("click", function () {
    password = generatePassword();
    document.getElementById("password").placeholder = password;
});

// This function will generate password after the click
function generatePassword() {
    
    //prompt to ask the user the number of character that they wish for their password
    confirmInput = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));

    // check to see if the input has been entered correctly
    if (!confirmInput) {
        alert("Please enter the the number of character for your password");

           // validate if the value of the input is between the number 8 and 128 
    } else if (confirmInput < 8 || confirmInput > 128) {
        confirmInput = parseInt(prompt("Please xhoose between 8 and 128"));

        // confirm all the additionnal characters that will compose the password
    } else {
        confirmLowerChar = confirm ("Would you like to include lower case?");
        confirmNumberChar = confirm ("would like to include numbers?");
        confirmUpperChar = confirm ("Would like to include Uppercase?");
        confirmSpecialChar = confirm ("Would like to include Special characters?");
    };

    // if none of the characters have been choosen then alert this 
    if (!confirmSpecialChar && !confirmNumberChar && !confirmUpperChar && !confirmLowerChar) {
        allChar = alert("No Character choosen! Please choose at least one character.");
    }

    // if all of the characters have been entered - concatenated all characters into a new array
    else if (confirmSpecialChar && confirmNumberChar && confirmUpperChar && confirmLowerChar) {

        allChar = specialChar.concat(numberChar, lowercaseChar, uppercaseChar);
    }
     
    // confirmation check is then carry out based on the number of character set confirmed.
    else if (confirmSpecialChar && confirmNumberChar && confirmUpperChar) {
        allChar = specialChar.concat(numberChar, uppercaseChar);

    } else if (confirmSpecialChar && confirmNumberChar && confirmLowerChar) {
        allChar = specialChar.concat(numberChar, lowercaseChar);

    } else if (confirmSpecialChar && confirmLowerChar && confirmUpperChar) {
        allChar = specialChar.concat(lowercaseChar, uppercaseChar);

    } else if (confirmNumberChar && confirmLowerChar && confirmUpperChar) {
        allChar = numberChar.concat(lowercaseChar, uppercaseChar);

    } else if (confirmSpecialChar && confirmNumberChar) {
        allChar = specialChar.concat(numberChar);

    } else if (confirmSpecialChar && confirmLowerChar) {
        allChar = specialChar.concat(lowercaseChar);

    } else if (confirmSpecialChar && confirmUpperChar) {
        allChar = specialChar.concat(uppercaseChar);

    } else if (confirmLowerChar && confirmNumberChar) {
        allChar = lowercaseChar.concat(numberChar);

    } else if (confirmLowerChar && confirmUpperChar) {
        allChar = lowercaseChar.concat(uppercaseChar);

    } else if (confirmNumberChar && confirmUpperChar) {
        allChar = numberChar.concat(uppercaseChar);

    } else if (confirmSpecialChar) {
        allChar = specialChar;

    } else if (confirmNumberChar) {
        allChar = numberChar;

    } else if (confirmLowerChar) {
        allChar = lowercaseChar;

    } else if (confirmUpperChar) {
        allChar = uppercaseChar;
    };

    // let declare a variable that will hold the random character inside allChar
    var passwordArray = [];

    // this will loop ramdomly into the concatenated allChar array and 
    //pick character that will be push into the new passwordArray based on the index of the array.
    for (var i = 0; i < confirmInput; i++) {
        var charIndex = allChar[Math.floor(Math.random() * allChar.length)];
        passwordArray.push(charIndex);
    }
   
    //this method join will convert the password array into variable string 
    var password = passwordArray.join("");
    
    // call the function to write the password in the text area
    writePassword(password);
    return password;
}

// This function will put the password as text in the text area.
function writePassword(password) {
    document.getElementById("password").textContent = password;

};

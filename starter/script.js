// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Function to prompt user for password options
// return the array that contains all the possible characters based on users preferences
function getPasswordOptions() {

// Length of password: At least 8 characters but no more than 128.
var length = 0
length = prompt("How many characters would you like the password to have, from 8 to 128")
length = Number(length)
if (isNaN(length) || length <= 8 || length >= 128){
  alert("Wrong input, please enter a number between 8 and 128");
}
  // Lowercase
var lowerCase = confirm("Would you like it to contain lowercase letters?")

// Uppercase
var upperCase = confirm("Would you like it to contain uppercase letters?")

// Numeric
var numeric = confirm("Would you like it to containnumbers?")

// Special characters ($@%&*, etc.)
var special = confirm("Would you like it to contain special characters?")

// Code should validate for each input and at least one character type should be selected.
if (!lowerCase && !upperCase && !numeric && !special) {
  alert("At least one character type must be selected.")
}

// Once all prompts are answered, the password should be generated and displayed in an alert or written to the page.
console.log(lowerCase)


// return {length:50, lowercase: true, uppercase: false, numeric: true, special: false}
}




// Function for getting a random element from an array
function getRandom(arr) {
// build an array of all possible options based on user prefs
}

// Function to generate password with user input
function generatePassword() {
// return("it works!")
// Pseudocode
// get the password options
  var options = getPasswordOptions()

// use conditionals to choose which arrays to concatenate (eg if special characters and numbers, put those arrays together)
// connect all the arrays the user wants to use (lower, numbers, special etc)
// use the users input for length for generate that number of random elements from the array
// get the random one

// need to loop => user requested for a length 
// this function must return the generated pw as a string

// how do we ensure pw contains at least one of the character type, not most important

// could use forEach or map but dont need to
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {      //this function calls generate password and puts the result into the text field
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);    //when someone clicks on the button (created above), run writepassword function


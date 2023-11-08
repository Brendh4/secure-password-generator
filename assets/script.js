// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var charactersArray = [];
var chosenLength = 0;
var password = "";

// Function to prompt user for password options
// return the array that contains all the possible characters based on users preferences
function getPasswordOptions() {
// Length of password: At least 8 characters but no more than 128.
chosenLength = prompt("How many characters would you like the password to have, from 8 to 128");
chosenLength = Number(chosenLength);
if (isNaN(chosenLength) || chosenLength <= 8 || chosenLength >= 128){
  alert("Wrong input, please enter a number between 8 and 128");
  return;
}

  // Lowercase
var lowerCase = confirm("Would you like it to contain lowercase letters?");
if(lowerCase == true) {        //if selected, adds it to the charactersArray 
  charactersArray = charactersArray.concat(lowerCasedCharacters);
}

// Uppercase
var upperCase = confirm("Would you like it to contain uppercase letters?");
if(upperCase == true) {
  charactersArray = charactersArray.concat(upperCasedCharacters);
}

// Numeric
var numeric = confirm("Would you like it to contain numbers?");
if(numeric == true) {
  charactersArray = charactersArray.concat(numericCharacters);
}

// Special characters ($@%&*, etc.)
var special = confirm("Would you like it to contain special characters?");
if(special == true) {
  charactersArray = charactersArray.concat(specialCharacters);
}

// Code should validate for each input and at least one character type should be selected.
if (!lowerCase && !upperCase && !numeric && !special) {
  alert("At least one character type must be selected.");
  return;
}
return charactersArray;
}


// Function for getting a random element from an array
function getRandom(charactersArray) {
  var random = String(Math.floor(Math.random() * charactersArray.length));  // string here or in generate/writepw?
  return charactersArray[random]; //selects a random element using the random function to the charactersarray array created by getpwoptions array 
}


// Function to generate password with user input
function generatePassword(chosenLength, charactersArray) { //calls the length and array of possible characters created in get password option to create a for lop below, using the random function to create a new string of random characters the length chosen in getpwoptions
  for (var i = 0; i < chosenLength; i++) {
    password += getRandom(charactersArray);
  }
  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');


// Write password to the #password input
function writePassword() {      //this function calls generate password and puts the result into the text field
  getPasswordOptions();
  var password = generatePassword(chosenLength, charactersArray);
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);    //when someone clicks on the button (created above), run writepassword function
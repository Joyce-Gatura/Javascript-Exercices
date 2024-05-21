function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return str === str.split('').reverse().join('');
}

let userInput = prompt("Please enter a string:");
if (userInput !== null) {
    alert(isPalindrome(userInput) ? "The string is a palindrome." : "The string is not a palindrome.");
} else {
    alert("No input provided.");
}
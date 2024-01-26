// check if a number is palindrome or not
var n = 1221;
var temp = n;
var store = 0;
while (n > 0) {
    var remainder = n % 10;
    store = store * 10 + remainder;
    n = Math.floor(n / 10); // Use Math.floor to get the integer division
}
if (temp === store) {
    console.log(temp + ' is palindrome');
}
else {
    console.log(temp + ' is not palindrome');
}

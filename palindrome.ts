// check if a number is palindrome or not
var n: number = 1221;
var temp: number = n;
var store: number = 0;

while (n > 0) {
    var remainder: number = n % 10;
    store = store * 10 + remainder;
    n = Math.floor(n / 10); // Use Math.floor to get the integer division
}

if (temp === store) {
    console.log(temp + ' is palindrome');
} else {
    console.log(temp + ' is not palindrome');
}

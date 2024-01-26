var n = 153;
var digit = 3;
var sum = 0;
var temp = n;
while (n != 0) {
    var remainder = n % 10;
    sum += n * n * n;
    temp = Math.floor(temp / 10);
}
if (sum == temp) {
    console.log('armstrong');
}
else {
    console.log('not');
}

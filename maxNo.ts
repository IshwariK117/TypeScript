//check max no among 3 numbers
var n1:number=7;
var n2:number=8;
var n3:number=6;
if (n1 > n2 && n2 > n3) {
    console.log(n1+ ' is greater than '+n2+' and '+n3);
}
else if (n2 > n1 && n2 > n3) {
    console.log(n2+' is greater than '+n1+' and '+n3);
}
else {
    console.log(n3+' is greater than '+n1+' and '+n2);
}

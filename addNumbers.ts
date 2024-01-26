
function addNumber(...nums: number[]): void {
    var i;
    var sum: number = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log(sum);
}

addNumber(1, 2, 3);

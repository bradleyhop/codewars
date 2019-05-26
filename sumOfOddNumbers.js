/*
 *Given the triangle of consecutive odd numbers:
 *
 *             1
 *          3     5
 *       7     9    11
 *   13    15    17    19
 *21    23    25    27    29
 *...
 *
 *Calculate the row sums of this triangle from the row index (starting at index)
 *e.g.:
 *
 *rowSumOddNumbers(1); // 1
 *rowSumOddNumbers(2); // 3 + 5 = 8
 */

function rowSumOddNumbers(n) {

    // the last row will have n numbers in it
    let numberOfOdds = 0;
    for (let i = n; i > 0; i--) {
        numberOfOdds = numberOfOdds + i;
    }

    // create array of odds needed
    let oddArray = [1];
    for (let i = 0; i < numberOfOdds - 1; i++) {
        oddArray.push(oddArray[i] + 2);
    }

    // n is the number of odds in the last row, sum up!
    let sum = 0;
    // start at the end, go back
    let endPosition = oddArray.length - 1;
    for (let i = n; i > 0; i--) {
        sum = sum + oddArray[endPosition];
        endPosition = endPosition - 1;
    }


    return sum;
}

console.log(rowSumOddNumbers(1));
// 1
console.log(rowSumOddNumbers(42));
// 74088
console.log(rowSumOddNumbers(5));
// 125
console.log(rowSumOddNumbers(2));
// 8
// Actual solution: use the built-in pow method to cube n

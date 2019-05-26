// 6kyu

/*
 *Given an array, find the int that appears an odd number of times.
 *
 *There will always be only one integer that appears an odd number of times.
 */

function findOdd(A) {
    let whosLeft = [];

    for (let i of A) {
        if (whosLeft.indexOf(i) <= -1) {
            whosLeft.push(i);
        } else {
            whosLeft.splice(whosLeft.indexOf(i), 1);
        }
    }

    return whosLeft[0];
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
// 5
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));
// -1
console.log(findOdd([ 20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5 ]));
// 5

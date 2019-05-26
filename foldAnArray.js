// 6 kyu

/*
 *In this kata you have to write a method that folds a given array of integers by the middle x-times.
 *
 *An example says more than thousand words:
 *
 *Fold 1-times:
 *[1,2,3,4,5] -> [6,6,3]
 *
 *A little visualization (NOT for the algorithm but for the idea of folding):
 *
 * Step 1         Step 2        Step 3       Step 4       Step5
 *                     5/           5|         5\ 
 *                    4/            4|          4\ 
 *1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
 *----*----      ----*          ----*        ----*        ----*
 *
 *
 *Fold 2-times:
 *[1,2,3,4,5] -> [9,6]
 *
 * You must not modify the original array.
 */

function foldArray(array, runs) {
    // slice will return a copy of the array called, not a reference to the
    //  array itself
    let newArr = array.slice(0);

    for (let j  = 0; j < runs; j++) {
        let max = Math.floor(newArr.length / 2);
        for (let i = 0; i < max; i++) {
            newArr[i] += newArr.pop();
        }
    }

    return newArr;
}

console.log(foldArray([1, 2, 3, 4, 5], 3));
// [ 15 ]
console.log(foldArray([-9, 9, -8, 8, 66, 23], 1));
// [14, 75, 0]
console.log(foldArray([5], 1));
// [5]

// 6 kyu

/*
 *Create the function prefill that returns an array of n elements that all have
 *the same value v. See if you can do this without using a loop.
 *
 *You have to validate input:
 *
 *v can be anything (primitive or otherwise)
 *if v is ommited, fill the array with undefined
 *if n is 0, return an empty array
 *if n is anything other than an integer or integer-formatted string (e.g. '123')
 *that is >=0, throw a TypeError
 *
 *When throwing a TypeError, the message should be n is invalid, where you
 *replace n for the actual value passed to the function.
 *
 *Code Examples
 *
 *    prefill(3,1) --> [1,1,1]
 *
 *    prefill(2,"abc") --> ['abc','abc']
 *
 *    prefill("1", 1) --> [1]
 *
 *    prefill(3, prefill(2,'2d'))
 *      --> [['2d','2d'],['2d','2d'],['2d','2d']]
 *
 *    prefill("xyz", 1)
 *      --> throws TypeError with message "xyz is invalid"
 */


function prefill(n, v) {
    let numb = Number(n);
    let arr = [];
    if ( Number.isInteger(numb) && numb >= 0 && typeof n !== "boolean") {
        while (numb > 0) {
            arr.push(v);
            numb--;
        }
    } else {
        throw TypeError(n + ' is invalid');
    }

    return arr;
}

//console.log(prefill('xyz', 1));
//console.log(prefill(true, 'rr'));
// throws TypeError
console.log(prefill(2, '2d'));
console.log(prefill("1", 1));
console.log(prefill(1, 'dd'));
console.log(prefill(0, 'll'));

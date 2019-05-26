// 7 kyu

/*
 *Complete the function that accepts a string parameter, and reverses each word
 *    in the string. All spaces in the string should be retained.
 *
 * Examples:
 *
 * "This is an example!" ==> "sihT si na !elpmaxe"
 *"double  spaces"      ==> "elbuod  secaps"
 */

function reverseWords(str) {
    let emptyArr = [];

    str.split(' ').map( el => emptyArr.push(el.split('').reverse().join('') ));

    return emptyArr.join(' ');
}

console.log(reverseWords('double  spaced  words'));
// 'elbuod  decaps  sdrow'
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
// ehT kciuq nworb xof spmuj revo eht yzal .god'

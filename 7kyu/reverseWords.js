//TODO!!!

// 7 kyu

/*
 *Write a reverseWords function that accepts a string a parameter, and reverses
 *each word in the string. Every space should stay, so you cannot use words from
 *Prelude.
 */

function reverseWords(str) {
    return str.split('').reverse().join('');
}

console.log(reverseWords('double  spaced  words'));
// 'elbuod  decaps  sdrow'
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
// ehT kciuq nworb xof spmuj revo eht yzal .god'

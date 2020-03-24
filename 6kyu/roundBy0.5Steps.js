/*
 * Round any given number to the closest 0.5 step
 *
 * I.E.
 *
 * solution(4.2) = 4
 * solution(4.3) = 4.5
 * solution(4.6) = 4.5
 * solution(4.8) = 5
 *
 * Round up if number is as close to previous and next 0.5 steps.
 *
 * solution(4.75) == 5
 */

function solution(n) {
  let rounded = Math.trunc(n);
  let remainder = n - rounded;

  if (remainder > 0.25 && remainder < 0.75) {
    remainder = 0.5;
  } else if (remainder >= 0.75) {
    remainder = 1;
  } else {
    remainder = 0;
  }

  return rounded + remainder;
}

console.log(solution(4.2));
// 4
console.log(solution(4.4));
// 4.5
console.log(solution(4.6));
// 4.5
console.log(solution(4.8));
// 5
console.log(solution(4.75));
// 5
console.log(solution(4.74));
// 4.5

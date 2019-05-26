// 7kyu

/*
 *This time no story, no theory. The examples below show you how to write
 *function accum:
 *
 *Examples:
 *
 *accum("abcd") -> "A-Bb-Ccc-Dddd"
 *accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
 *accum("cwAt") -> "C-Ww-Aaa-Tttt"
 *
 *The parameter of accum is a string which includes only letters from a..z and
 *A..Z.
 */

function accum( s ) {
    let localArr = s.split("");
    let mumbles = "";

    for (let i = 0; i < localArr.length; i++) {

        if (localArr[i] === localArr[i].toUpperCase()) {
            mumbles += localArr[i];
        } else {
            mumbles += localArr[i].toUpperCase();
        }

        if (i > 0) {
            mumbles += localArr[i].toLowerCase().repeat(i);
        }

        if (i !== localArr.length - 1) {
            mumbles += "-";
        }
    }


    return mumbles;
}

console.log(accum("abcd"));
//returns "A-Bb-Ccc-Dddd"
console.log(accum("ZpglnRxqenU"));
//returns "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"

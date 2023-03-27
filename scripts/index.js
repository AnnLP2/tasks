'use strict';

function square(n, onWrongParam) {
    if (typeof n !== 'number') {
        if (typeof onWrongParam === 'function') {
            onWrongParam(n);
        } else {
            console.log('Wrong type of n');
        }
    }
    return n ** 2;
}

console.log(square(5));
console.log(square('foo', (n) => console.log('Wrong number!')));

// function findChar(str, check) {
//     for (let i = 0; i < str.length; i++) {
//         if (check(str[i])) return str[i];
//     }
//     return null;
//
// }
//
// const firstCapitalLetter = findChar(
//     'Anna',
//     (char) => char.toUpperCase() === char
// );
//
// const firstNumber = findChar(
//     '7user',
//     (char) => !isNaN(+char)
// )
//
// console.log(firstNumber);
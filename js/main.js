'use strict';

// 問題1ここから
const array = [2, 4, 7, 5, 4, 3, 8];

const number = array.filter(function (item, index) {
    return array.indexOf(item) === index;
});

console.log(number);





// /問題2ここから
function leapYear(ad) {
    if ((ad % 4 === 0 && ad % 100 !== 0) || ad % 400 === 0) {
        console.log(`${ad}はうるう年です。`);
    } else {
        console.log(`${ad}はうるう年ではありません。`);
    }
}

leapYear(2020);
leapYear(2021);

let s = '3279 998884 1832781 517 8 18864 28 0';

s = '125 17';

const max = 6;
// 6 22
// 25 55312

let oldArray = s.split(' ').map(Number)
let newArray = [];

for (let i = 0; i < max; i++) {
  newArray = [];
  for (const elem of oldArray) {
    const compleet = elem + '';
    let stringLen = compleet.length;

    if (0 === elem) {
      newArray.push(1)
    } else if (stringLen % 2 === 0) {
      var firstHalf = compleet.substring(0, stringLen / 2);
      var secondHalf = compleet.substring(stringLen / 2);
      newArray.push(+firstHalf)
      newArray.push(+secondHalf)
    } else {
      newArray.push(elem * 2024)
    }
  }
  oldArray = newArray;
}

console.log(newArray.length)

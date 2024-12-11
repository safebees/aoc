import '../../utils'
import {measureTime} from '../../utils';

let s = '3279 998884 1832781 517 8 18864 28 0';
const max = 75;

const cache = new Map<number, (Map<number, number>)>();

measureTime(() => {
  let data = s.split(' ').map(Number).map(elem => processNumber(elem, 1)).sum();
  console.log(data) // 259593838049805
});

function processNumber(elem: number, index: number, counter = 0) {
  if (index === max + 1) {
    counter++;
    return counter;
  }
  const compleet = elem + '';
  const stringLen = compleet.length;
  const newIndex = index + 1;

  let map = cache.get(newIndex) ?? new Map();
  cache.set(newIndex, map)

  if (0 === elem) {
    let number = map.get(elem) ?? processNumber(1, newIndex);
    map.set(elem, number);
    counter += processNumber(1, newIndex);
  } else if (stringLen % 2 === 0) {
    counter += processNumber(+compleet.substring(0, stringLen / 2), newIndex)
    counter += processNumber(+compleet.substring(stringLen / 2), newIndex)
  } else {
    let number = map.get(elem);
    if (!number) {
      number = processNumber(elem * 2024, newIndex)
      map.set(elem, number);
    }
    counter += number
  }
  return counter;
}

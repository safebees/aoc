declare global {
  interface String {
    replaceLast(searchValue: string, replaceValue: string): string;

    getBetweens(start: string, end: string): string[];

    remove(...start: string[]): string;
  }

  interface Array<T> {
    sum(): number;
  }
}

String.prototype.replaceLast = function(searchValue: string, replaceValue: string): string {
  const charpos = this.lastIndexOf(searchValue);
  if (charpos < 0) {
    return this;
  }
  return (this.substring(0, charpos) + replaceValue + this.substring(charpos + (searchValue.length)));
};

String.prototype.remove = function(...toRemove: string[]): string {
  let newS: string = this;
  for (const s of toRemove ?? []) {
    while (newS.includes(s)) {
      newS = newS.replace(s, '')
    }
  }
  return newS;
};

Array.prototype.sum = function(): number {
  return sum(this);
};

String.prototype.getBetweens = function(start: string, end: string): string[] {

  const s = start.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  const e = end.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

  let matcher = new RegExp(s + '(.*?)' + e, 'g');
  return this.match(matcher);
};

export function getNumberFromString(n: string) {
  const match = n.match(/\d+/g);
  return !match ? undefined : parseInt(match.join(''));
}

export function sum(n: number[]) {
  return n?.reduce((e1, e2) => (e1 || 0) + (e2 || 0)) || 0;
}

export function sort(n: number[]) {
  return n.sort(function(a, b) {
    return b - a
  });
}

export function evaluate(toEval: string) {
  return new Function('return ' + toEval)();
}

export function findIndexByChar(m: string[][], s: string): Coordinate {
  let find = m
      .flatMap((row, y) => row.map((cha, x) => cha === s ? {x, y} : undefined))
      .find(coord => coord !== undefined);
  return checkNotNull(find);
}

export function findIndicesByChar(m: string[][], s: string): Coordinate[] {
  return m
      .flatMap((row, y) => row.map((cha, x) => cha === s ? {x, y} : undefined))
      .filter(coord => coord !== undefined);
}

export function checkNotNull<T>(find: T | undefined): T {
  if (find === undefined) {
    throw new Error('undeifned');
  }
  return find;
}

export type Direction = 'up' | 'right' | 'down' | 'left';
export const allDirections: Direction[] = ['up', 'right', 'down', 'left'];
export type Coordinate = { x: number, y: number };

export function getCordinates(x: number, y: number, d: Direction): { x: number, y: number } {
  if (d === 'up') {
    return {x: x + 0, y: y - 1};
  } else if (d === 'right') {
    return {x: x + 1, y: y + 0};
  } else if (d === 'down') {
    return {x: x + 0, y: y + 1};
  } else if (d === 'left') {
    return {x: x - 1, y: y + 0};
  }
  throw new Error();
}

export function sameCoordinate(a1: Coordinate, a2: Coordinate) {
  return a1.x === a2.x && a1.y === a2.y;
}

export class MultiMap<K, V> {
  m = new Map<K, V[]>();

  add(k: K, v: V) {
    const newVar = this.get(k);
    newVar.push(v);
    this.m.set(k, newVar);
  }

  get(k: K) {
    return this.m.get(k) ?? [];
  }
}

export function times<T>(start: number, end: number, f: (i: number) => T): T[] {
  const s = [];
  for (let i = start; i <= end; i++) {
    s.push(f(i));
  }
  return s;
}

export function removeItem<T>(items: T[], index: number): T[] {
  const firstArr = items.slice(0, index);
  const secondArr = items.slice(index + 1);
  return [...firstArr, ...secondArr];
}

export function logMatrix(matrixC: string[][]) {
  console.log(matrixC.map(x => x.join('')).join('\n') + '\n' + '\n');
}

export function getAmountChar(matrix: string[][], c: string) {
  return matrix.flatMap(s => s).filter(s => s === c).length
}

export function forEach<T>(matrix: T[][], f: (element: T, coordinate: Coordinate, index: number) => undefined) {
  let counter = 0;
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      f(matrix[y][x], {x, y}, counter);
      counter += 1;
    }
  }
}

export function replaceAll<T>(matrix: T[][], current: T, toReplace: T) {
  forEach(matrix, (a, {x, y}) => {
    if (a === current) {
      matrix[y][x] = toReplace;
    }
  })
}

export function distinct<T>(list: T[], f: (s: T) => unknown = (s) => s): T[] {
  if (!list) {
    return [];
  }
  return [...new Map(list.map(item => [f(item), item])).values()].filter(s => s !== undefined);
}

import {readLines} from "../../utils";

async function main() {
    let s1: number[] = [];
    let s2: number[] = [];
    await readLines('/Users/mac/IdeaProjects/aoc/src/2024/01/input.txt', (c, i) => {
        const regExpMatchArray = c.match(/\d+/g);
        s1.push(parseInt(regExpMatchArray[0]));
        s2.push(parseInt(regExpMatchArray[1]));
    });

    let total = 0;
    for (const value of s1) {
        total += value * s2.filter(x => x === value).length;
    }

    console.log(total)
    return total;
}

main();



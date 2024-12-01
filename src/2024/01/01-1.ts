import {readLines, sort} from "../../utils";

async function main() {
    let s1: number[] = [];
    let s2: number[] = [];
    await readLines('/Users/mac/IdeaProjects/aoc/src/2024/01/input.txt', (c, i) => {
        let regExpMatchArray = c.match(/\d+/g);
        s1.push(parseInt(regExpMatchArray[0]));
        s2.push(parseInt(regExpMatchArray[1]));
    });
    s1 = sort(s1);
    s2 = sort(s2);
    let distance = 0;
    for (let i = 0; i < s1.length; i++) {
        distance += Math.abs(s1[i] - s2[i]);
    }
    console.log(distance)
    return distance;
}
main();



import {getNumberFromString} from "../../utils";

async function main() {

    const s = [
        '1abc2',
        'pqr3stu8vwx',
        'a1b2c3d4e5f',
        'treb7uchet',
    ];

    let x = 0;

    for (const string of s) {
        const number = getNumberFromString(string);
        const numberAsString = number.toString();
        const s2 = number.toString().substring(0, 1);
        const s3 = number >= 10 ?
            numberAsString.substring(numberAsString.length - 1, numberAsString.length) :
            s2;
        const s1 = parseInt(s2 + (s3))
        x = x + s1;
    }

    console.log(x);
    return undefined;
}

main();



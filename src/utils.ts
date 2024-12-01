
export function getNumberFromString(n: string) {
    const match = n.match(/\d+/g);
    return !match ? undefined : parseInt(match.join(''));
}

export function sum(n: number[]) {
    return n?.reduce((e1, e2) => (e1 ?? 0) + (e2 ?? 0)) ?? 0;
}

export function sort(n: number[]) {
    return n.sort(function (a, b) {
        return b - a
    });
}

export async function readLines(filePath: string, f: (line: string, i?: number) => undefined) {
    const reader = Bun.file(filePath).stream().pipeThrough(new TextDecoderStream('utf-8')).getReader()
    let remainder = '';
    let counter = 0;

    while (true) {
        const {value, done} = await reader.read()
        if (done) break
        let lines = (remainder + value).split(/\r?\n/)
        remainder = lines.pop()!

        for (const line of lines) {
            f(line, counter);
            if (counter === 998) {
                console.log()
            }
            counter += 1;
        }
    }
    if (remainder) {
        f(remainder, counter + 1);
    }
    return undefined;
}

export async function readLinesToArray(filePath: string) {
    const arr: string[] = [];
    await readLines(filePath, line => {
        arr.push(line);
    });
    return arr;
}

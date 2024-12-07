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

const { round, abs, floor } = math;

function commaValue(amount: number): string {
    let res: string = tostring(amount);
    while (true) {
        let gsubRes = tostring(res).gsub("^(-?%d+)(%d%d%d)", '%1,%2');
        let k = gsubRes[1];
        res = gsubRes[0];
        if (k === 0)
            break;
    }
    return res;
}

export function format(n: number): string {
    let famount = floor(abs(round(n)));
    let remain = round(abs(n) - famount);
    return commaValue(famount);
}
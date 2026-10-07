const START = /^\s*(?:\/\*|\/\/|<!--)\s*@key\s*(?:\*\/|-->)?\s*$/;
const END = /^\s*(?:\/\*|\/\/|<!--)\s*@end\s*(?:\*\/|-->)?\s*$/;

function dedent(lines: string[]) {
	const indents = lines.filter((l) => l.trim()).map((l) => l.match(/^\s*/)![0].length);
	const min = Math.min(...indents);
	return lines.map((l) => l.slice(min));
}

/**
 * ソース中の `@key` 〜 `@end` のコメントで囲んだ範囲だけを抜き出す。
 * 範囲が複数あるときは空行でつなぐ。範囲がなければ空文字を返す。
 */
export function excerpt(source: string) {
	const regions: string[][] = [];
	let current: string[] | undefined;
	for (const line of source.split('\n')) {
		if (START.test(line)) {
			current = [];
		} else if (END.test(line) && current) {
			regions.push(dedent(current));
			current = undefined;
		} else if (current) {
			current.push(line);
		}
	}
	return regions.map((r) => r.join('\n')).join('\n\n');
}

const thing = `ENTRIES HERE`
const rows = thing.split("\n").map(thig => thig.repeat(1000)) //safe number

let i = 0
let hits11 = 0
let hits51 = 0
let hits71 = 0
let hits12 = 0
while (i < rows.length) {
	if (rows[i][5*i] === "#") hits51++
	if (rows[i][7*i] === "#") hits71++
	if (rows[i][i] === "#") hits11++
	if (rows[2*i]) {
		if (rows[2*i][i] === "#") hits12++
	}
	i++
}
console.log(hits51, hits71, hits11, hits12, 242 * hits51 * hits71 * hits11 * hits12)
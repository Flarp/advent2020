const enc = `FIRST ENTIRES HERE`.split("\n").map(n => parseInt(n))

const enc1 = `SECOND ENTRIES HERE`.split("\n").map(n => parseInt(n))

const PREAM_SIZE = 25

// initialize the first 25 sums (preamble)
const tf_sums = []
for (let i = 0; i < PREAM_SIZE; i++) {
	for (let k = i + 1; k < PREAM_SIZE; k++) {
        tf_sums.push(enc[i] + enc[k])
    }
}

let inc = 0
let bad = -1
for (let j = PREAM_SIZE; j < enc.length; j++) {
	if (!tf_sums.includes(enc[j])) {
		bad = enc[j]
		break
	}
	
	// we don't need to regenerate the array every time, we can
	// just generate the difference between the array [n, n+25]
	// and [n+1, n+26] and "merge" them together
	for (let n = 1 + inc; n < PREAM_SIZE + inc; n++) {
		const m = n + 1 - inc
		const z = (PREAM_SIZE*m) - ((m*(m+1))/2) + (m-1) - 1
		tf_sums.splice(z, 0, enc[n] + enc[j])
	}
	inc++
	tf_sums.splice(0, PREAM_SIZE-1)
}

console.log(bad)

let min = 0
let max = 0
let sum = enc[min]
while (sum !== bad && max < enc.length) {
	//break
	while (sum < bad) {
		max++
		sum += enc[max]
	}
	while (sum > bad) {
		sum -= enc[min]
		min++
	}
}

const stride = enc.slice(min, max + 1)

// sum, min val, max val
console.log(bad, stride.reduce((p, c) => p < c ? p : c) + stride.reduce((p, c) => p > c ? p : c))


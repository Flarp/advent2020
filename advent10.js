const jolts2 = `FIRST ENTRIES HERE`.split("\n").map(g => parseInt(g)).sort((l, r) => l > r ? 1 : -1)

const jolts = `SECOND ENTRIES HERE`.split("\n").map(g => parseInt(g)).sort((l, r) => l > r ? 1 : -1)

const jolts1 = `THIRD ENTIRES HERE`.split("\n").map(g => parseInt(g)).sort((l, r) => l > r ? 1 : -1)

// we have to start from 0
jolts.splice(0, 0, 0)

// device rating must be three higher than highest adapter
jolts.push(jolts[jolts.length - 1] + 3)

let threeDiff = 0
let oneDiff = 0


const strides = [[]]
let strideIndex = 0
let strideStartIndex = 0

const nchoosek = (n, k) => {
	let sum = 1
	for (let i = 1; i < k + 1; i++) {
		sum *= (n + 1 - i)/i
	}
	return sum
}


for (let i = 0; i < jolts.length; i++) {	
	if (jolts[i] - jolts[i-1] === 3) {
		threeDiff++
		strideIndex++
		strides[strideIndex] = []
		strideStartIndex = i 
	} else {
		if (jolts[i] - jolts[i-1] === 1) oneDiff++

	}
	
	strides[strideIndex].push(jolts[i])
}

// The distance between two elements will always be
// either 1 or 3, so we don't have to account for the
// nonsense that would occur if there were rows of twos.
// We also know that the longest jolt stride possible is 
// five, so we can just do a simple nchoosek of the values
// in the middle (not on the boundaries which are bounded
// by previous jolts of different 3).
distinctArrangements = strides
.map(stride => {
	if (stride.length < 3) return 1
	let sum = 0
	const mtwo = stride.length - 2
	
	for (let e = mtwo; e >= mtwo - 2 && e >= 0; e--) {
		console.log(mtwo, e)
		sum += nchoosek(mtwo, e)
	}
		
	
	console.log(stride, sum)
	return sum
})
.reduce((prev, curr) => prev * curr, 1)

console.log(oneDiff * threeDiff, distinctArrangements, strides)
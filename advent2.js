let badPasses = 0

const lines = `ENTRIES HERE`.split("\n").map(line => {
	const temp = line.match(/(\d*)-(\d*) (\w): (\w*)/)
	const lowerBound = parseInt(temp[1])-1
	const upperBound = parseInt(temp[2])-1
	let hits = 0
	let bad = false
	if ((temp[4][lowerBound] == temp[3] || temp[4][upperBound] == temp[3]) && (temp[4][lowerBound] != temp[4][upperBound])) badPasses++
	/*
	for (let x = 0; x < temp[4].length; x++) {
		if (temp[4][x] === temp[3]) hits++
	}
	
	if (hits >= lowerBound && hits <= upperBound) {
		bad = true;
		badPasses++
	}
	*/
	console.log(temp[4], temp[3], hits, lowerBound, upperBound, bad)
})

console.log(badPasses)
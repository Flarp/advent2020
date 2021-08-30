let seats = `ENTRIES HERE`.split("\n")

let prev = []

// helper function, a seat can only be occupied if it exists
const isEmpty = seat => seat === "L" || seat === "." || seat === undefined

// strings are immutable, have to do this
const replaceAt = (str, insert, index) => {
	const sideOne = str.slice(0, index)
    const sideTwo = str.slice(index + 1)
    return sideOne + insert + sideTwo
}
	let k = 0
while (!seats.every((_, i) => seats[i] === prev[i])) {

	let prev = seats.slice(0)
	seats = seats.map((row, rowIndex) => {
		const prevRow = row
		for (let i = 0; i < row.length; i++) {
			if (isEmpty(prevRow[i-1]) && isEmpty(prevRow[i+1]) && prevRow[i] !== ".") row = replaceAt(row, "#", i)

			let nums = 0
			if (prevRow[i] === "#") {
				for (let g = 0; g < 7; g++) {
					const r = rowIndex + Math.floor(g/3) - 1
					const p = i + (g%3) - 1
					
					// ensure the array exists and it's not our current location
					if (prev[r] && !(r === rowIndex && p === i)) {
						
						if (prev[r][p] === "#") {
							nums++
							//console.log(r, p, rowIndex, i)
						} else {
							console.log(r, p, prev[r][p], rowIndex, i)
						}
					}
				}
			}

			if (nums >= 4) row = replaceAt(row, "L", i)
		}
		
		return row
	})
	k++
	//break
	console.log(prev, seats)
	if (k === 2) break
}

//console.log(seats)

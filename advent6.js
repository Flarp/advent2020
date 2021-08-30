const inputs = `ENTRIES HERE`

// part 1
const sets = inputs.split("\n\n").map(group => {
	const set = new Set()
	group.split("\n").join("").split("").map(char => set.add(char))
	return set
})

//part 2
const allSets = inputs.split("\n\n").map(group => {
	const set = new Set()
	const sets = group.split("\n").map(vidual => {
		const vidualSet = new Set()
		vidual.split("").map(char => vidualSet.add(char))
		return vidualSet
	})
	sets.map(setVidual => {
		[...setVidual].map(char => {
			if (sets.every(x => x.has(char))) {
				set.add(char)
			} else {
				set.delete(char)
			}
		})
	})
	return set
})
console.log(sets.reduce((prev, curr) => prev + curr.size, 0))
//console.log(allSets)
console.log(allSets.reduce((prev, curr) => prev + curr.size, 0))
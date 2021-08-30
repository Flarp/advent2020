const ass = `ENTRIES HERE`.split("\n")
const ids = []
for (let i = 0; i < Math.pow(2, 10); i++) {
	let temp = ""
	for (let k = 0; k < 7; k++) {
		temp += (i&(Math.pow(2,k)) ? "F" : "B")
	}
	for (let k = 7; k < 10; k++) {
		temp += (i&(Math.pow(2,k)) ? "R" : "L")
	}
	ids.push(temp)
}
//console.log(ids)
		
let highestID = 0
const unaccount = ids.slice(0)

const assToId = id => {
	let maxRow = 127
	let minRow = 0
	let maxCol = 7
	let minCol = 0
	for (let i = 0; i < 7; i++) {
		if (id[i] === "F") {
			maxRow -= Math.pow(2, 6-i)
		} else {
			minRow += Math.pow(2, 6-i)
		}
	}
	for (let i = 7; i < 10; i++) {
		if (id[i] === "R") {
			minCol += Math.pow(2, 9-i)
		} else {
			maxCol -= Math.pow(2, 9-i)
		}
	}
	const iid = (maxRow * 8) + maxCol
	let index = unaccount.indexOf(id)
	
	if (iid > highestID) highestID = iid

	if (index !== -1) unaccount.splice(index, 1)
	
	return iid
	//console.log(id, max, min)
}

//console.log(ass)
let asid = ass.map(assToId)
console.log(highestID)
console.log(unaccount.map(assToId).filter(x => asid.indexOf(x+1) !== -1 && asid.indexOf(x-1) !== -1))

//console.log(ids)
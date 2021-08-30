const asm = `FIRST ENTRIES HERE`.split("\n")

const asm1 = `SECOND ENTRIES HERE`.split("\n")

let visited = new Set()
let leadsToLoop = new Set()

let accumulator = 0
let found = false
let i = 0

const part2 = true

for (let k = 0; k < asm.length; k++) {
	
	let [insK, amountK] = asm[k].split(" ")
	
	if ((!part2 && k !== 0) || (part2 && insK === "acc")) continue
	else accumulator = 0
	
	//console.log(k === 468, k)
	
	let prevIndex = 0 // for storing jump leads
	
	visited = new Set()
	for (i = 0; i < asm.length; i++) {
		//console.log(visited, i, accumulator)
		if (visited.size === visited.add(i).size) {
				//console.log("soon")
				leadsToLoop.add(prevIndex)
				//console.log(i, k)
				break
		}
		let [ins, amount] = asm[i].split(" ")
		amount = parseInt(amount)
		if (i === k && part2) {
			
			if (ins === "jmp") ins = "nop"
			else ins = "jmp"
			
			console.log(ins, amount, i, asm[i], k)
		}
		//console.log(asm[i], i)
		prevIndex = i
		if (ins === "jmp") {
			i += (amount - 1)
			//if (visited.size === visited.add(i).size) {
			//	console.log("cry")
			//	break
			//}
		} else if (ins === "acc") {
			accumulator += amount
		}

	}
	if (i === asm.length) {
		console.log(acc, "done")
		break
	} else {
		console.log(i, k, asm.length)
	}
}
console.log(accumulator)

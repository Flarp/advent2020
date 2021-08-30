const rules = `ENTRIES HERE`
const firstArr = rules
	.split("\n")
	.map(rule => rule
		.split(/\s(?:bags contain\s|bags[,\s|.]|bag[,\s|.])/)
		.filter(r => r !== "")
		.map(r => r.trim())
	)
const containers = []//new Map()
const reverseContainer = []
firstArr.map(ruleSet => {
	ruleSet.slice(1).map(ruls => {
		//console.log(ruls)
		const temp = ruls.split(" ")
		const bag = temp.slice(1).join(" ")
		const num = parseInt(temp[0])
		if (!containers[bag]) containers[bag] = []
		containers[bag].push(ruleSet[0])
		if (!reverseContainer[ruleSet[0]]) reverseContainer[ruleSet[0]] = []
		reverseContainer[ruleSet[0]].push([num, bag])
	})
})


let temp = new Set(["shiny gold"])
let concats = temp

while ([...temp].some(val => containers[val])) {
	const temp2 = new Set()
	const iter = [...temp]
	iter.map(val => {
		(containers[val] || []).map(key => temp2.add(key))
	})
	temp = temp2
	//console.log("hello", concats)
	concats = new Set([...temp, ...concats])
	
}

let tempNext = [[1, "shiny gold"]]
const final = []
let total = 0

//console.log(tempNext.map(next => containers[next[1]] !== undefined), containers)

while (tempNext.some(next => reverseContainer[next[1]] !== undefined)) {
	const tempNew = []
	console.log(tempNext, total)
	tempNext.map(curr => {
		let counted = false;
		//console.log(curr);
		//console.log(reverseContainer[curr[1]]);
		(reverseContainer[curr[1]] || []).map(ele => {
			if (!isNaN(ele[0])) {
				if (!counted) {
					total += curr[0]
					counted = true
				}
				tempNew.push([curr[0] * ele[0], ele[1]])
			} else {
				final.push(curr)
			}
		})
	})
	//console.log(tempNext, "1957")
	tempNext = tempNew
}
console.log(reverseContainer)
console.log(final, final.map(x => x[0]).reduce((p, c) => p + c, 0) + total - 1)

//console.log(containers)
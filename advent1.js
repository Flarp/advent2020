let nums = `ENTRIES_HERE`.split("\n").map(e => parseInt(e))//.map(parseInt)

nums.sort((a,b) => a < b ? -1 : 1)

let i = 0

while (i < nums.length) {//(nums[i])/2 <= 2020) {
	for (let k = i+1; k < nums.length; k++) {
		for (let j = k+1; j < nums.length; j++) {
			if (nums[i] + nums[k] + nums[j] === 2020) console.log("Match!", nums[i], nums[k], nums[j])
		}
	}
	i++
}
//console.log(nums)
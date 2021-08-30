let passports = `ENTRIES HERE`.split("\n\n")

const neededOld = ["byr", "iyr", "eyr", "hgt", "hcl", "pid", "ecl"]
let needed = [/byr\:(\d{4})/, /iyr\:(\d{4})/, /eyr\:(\d{4})/, /hgt\:([0-9]*)(cm|in)/, /hcl\:#[0-9|a-f]{6}/, /pid\:[0-9]{9}/, /ecl\:(amb|blu|brn|gry|grn|hzl|oth)/]
//console.log(passports.length)

let oks = 0

const checkPassport = passport => {
	let verifiedOld = neededOld.every(need => passport.match(need))
	if (!verifiedOld) return false
	let verified = needed.map(need => passport.match(need))
	if (verified.every(verify => verify !== null)) {
		const byr = parseInt(verified[0][1])
		const iyr = parseInt(verified[1][1])
		const eyr = parseInt(verified[2][1])
		const hgt = parseInt(verified[3][1])
		const cm = verified[3][2] === "cm"
		const byrok = (byr <= 2002 && byr >= 1920)
		const iyrok = (iyr >= 2010 && iyr <= 2020)
		const hgtok = ((cm && hgt >= 150 && hgt <= 193) || (!cm && hgt >= 59 && hgt <= 76))
		const eyrok = (eyr <= 2030 && eyr >= 2020)
		//console.log(byr)
		const lastoks = oks
		
		if (byrok && iyrok && hgtok && eyrok) {
			//console.log(passport, cm)
			oks++
			console.log(passport)
			return true
		}
		//console.log({byrok, iyrok, hgtok, eyrok}, passport)
		return false
		//if (lastoks === oks) console.log(byrok, iyrok, hgtok, eyrok, passportyou)
	} else {
		//console.log(passport, verified)
		return false
	}
	/*
	const x = passport.split(/\n| /).length
	if (x < 7 || x > 8) {
		//console.log("oh shite", passport)
	} else {
		oks++
	}*/
	//console.log(passport, x, "matches all")
}
	
//console.log(checkPassport(`pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
//hcl:#623a2f`))

passports.map(checkPassport)

console.log(oks)
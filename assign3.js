const value = process.argv

let soma = (Number(value[2])) + (Number(value[3]))


let text1

if (soma > 10 && soma < 100) {
	text1 = ('sum is greater than 10 and less than 100')
}
if (soma > 100 && soma < 1000) {
	text1 = ('sum is greater than 100 but less than 1000')
}

console.log(text1)
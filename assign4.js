const value = process.argv

const mealCost = (Number(value[2]))
const tipPercent = (Number(value[3]))
const tipAmount = (tipPercent / 100) * mealCost
const totalOwing = tipAmount + mealCost
const outPut = `your meal was $${mealCost} + a ${tipPercent}% tip = ${totalOwing}`

console.log(outPut)

// let soma = (Number(value[2])) + (Number(value[2])*Number%(value[3]))
// console.log(soma)
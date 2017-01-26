const javaClass = process.argv
let array=[]

console.log(javaClass[2])

array.push(Number(javaClass[2]))

array.push(Number(javaClass[3]))


let soma = array[0] + array[1]
console.log(soma)
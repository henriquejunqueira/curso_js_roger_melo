// Booleans e comparações
//console.log(true, false, 'true', 'false')

// Métodos podem retornar booleans
const email = 'brucewayne@rogermelo.com.br'
//const includes = email.includes('@') // retorna true ou false após verificar se na variável ou array existe a string especificada
//const includes = email.includes('#')
const includes = email.includes('wayne')

const names = ['dio', 'roger', 'robert']
//const arrayIncludes = names.includes('roger')
const arrayIncludes = names.includes('rob')

//console.log(includes)
//console.log(arrayIncludes)

// Operadores de comparação
const age = 31
const name = 'henrique'

// console.log(age == 31)
// console.log(age == 35)
// console.log(age != 35)
// console.log(age > 31)
// console.log(age < 32)
// console.log(age <= 31)
// console.log(age >= 31)

console.log(name == 'roger')
console.log(name == 'Roger')
console.log(name > 'belinha') // Belinha é menor que roger por conta de 'b' vir antes de 'r'. Como se fosse uma contagem alfabética
console.log(name > 'Roger') // Letra minúscula é maior que maiúscula
console.log(name > 'Belinha')
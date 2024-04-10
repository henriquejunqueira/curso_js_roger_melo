// Arrays
let heroes = ['Batman', 'Catwoman', 'Iron Man']

//heroes[2] = 'Spider-Man'

//console.log(heroes)
//console.log(heroes[3 - 2])

const ages = [31, 25, 39, 40, 25]

//console.log(ages[2])

const randomArray = ['Parker', 'Diana', 19, 18]

// Métodos de arrays
//console.log(randomArray)
//console.log(heroes.length)

//const joinHeroes = heroes.join() // concatena e sapara o array por vírgula
//const joinHeroes = heroes.join('|') // muda o separador de acordo com o que for colocado dentro do join()
const joinHeroes = heroes.join('-')
//const indexOf25 = ages.indexOf(25)
const indexOf25 = ages.indexOf('25') // -1 aparece no console quando não é encontrado o index do caracter indicado
const moreHeroes = heroes.concat(['Superman', 'Wolverine']) // junta dois arrays
const pushToHeroes = heroes.push('Cyclops', 'Hulk') // adiciona elementos ao array
const popHeroes = heroes.pop() // remove o último item de um array e faz um return dele

//console.log(joinHeroes)
//console.log(indexOf25)
//console.log(moreHeroes)
//console.log(pushToHeroes)
//console.log(heroes)
//console.log(popHeroes)
console.log(heroes)
// Conversão de tipos
let score = '100'

//score = Number(score) // Number() converte um valor em um número. Se o valor não puder ser convertido, NaN será retornado.

//console.log(score + 1)
//console.log(typeof score)

const crazyConversion = Number('Maçã')
const convertedNumber = String(97) // String() converte um valor em uma string
const booleanConversion = Boolean(10)

//console.log(crazyConversion) // retorna NaN porque Maçã não pode ser convertida em número, ou seja NaN (Not a Number)
//console.log(convertedNumber, typeof convertedNumber)
//console.log(booleanConversion, typeof booleanConversion)

//console.log(Boolean(0))
console.log(Boolean('0'))

// Quando qualquer um dos valores abaixo é convertido em boolean, resultam em false
/*
    Valores falsy:
        - false
        - 0
        - "", '', ``
        - null
        - undefined
        - NaN

    Valores truthy:
        - Qualquer valor que não é falsy
*/
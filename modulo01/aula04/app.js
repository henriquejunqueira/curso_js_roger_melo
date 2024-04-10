// Inteiros e decimais
const radius = 10
const pi = 3.14

/*console.log(radius, pi)*/

// Operadores aritméticos
/*console.log(10 / 2)*/

/*const reminder = 5 % 2*/
/*console.log(reminder)*/

const area = pi * radius ** 2

// Ordem de operações (ordem de precedência)
const crazyOperation = 5 * (10 - 3) ** 2
/*console.log(crazyOperation)*/

/*console.log(area)*/

/*
    1º parênteses
    2º expoentes ou raízes
    3º multiplicação e divisão
    4º adição e subtração
*/

// Operadores de incremento e decremento
let postLikes = 10

/*postLikes = postLikes + 1*/
/*postLikes++*/
/*postLikes--*/

/*console.log(postLikes)*/

// Operadores adição, subtração, multiplicação e divisão
/*postLikes = postLikes + 10*/
/*postLikes += 10*/
/*postLikes -= 5*/
/*postLikes *= 3*/
/*postLikes /= 2*/

/*console.log(postLikes)*/

// NaN - not a number (não é um número)
/*console.log(7 / 'oi')*/ // retorna NaN porque o resultado da operação não é um número

// Concatenação de string com número
const likeMessage = 'O post tem ' + postLikes + ' likes.'

console.log(likeMessage)
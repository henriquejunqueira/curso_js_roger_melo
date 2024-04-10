// Métodos comuns de strings
const email = 'henriquejunqueira94@gmail.com'

// pega a última ocorrência do caracter dentro da string
// const lastIndexOfA = email.lastIndexOf('a')

// pega uma fatia da string, nesse caso o nome 'henrique' sendo que 0 é o início e 8 é o final e não será exibido
// const emailSlice = email.slice(0, 8)
// const emailSlice = email.slice(3, 8)

// substitui o caracter de uma string por outro, o primeiro argumento é a string que vai sair e o segundo a string substituta
// const emailReplace = email.replace('r', 'y')
const emailReplace = email.replace('henrique', 'eu')

// console.log(lastIndexOfA)
// console.log(emailSlice)
// console.log(emailSlice, email)
console.log(emailReplace, email)
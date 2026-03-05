// Operadores lógicos

let condicao_a = 1 < 2 // True
let condicao_b = 10 < 2 // False

// os dois precisam dar verdadeiro
console.log(" - AND -")
console.log(condicao_a && condicao_b)

// inverte o resultado para dar o mesmo
console.log("\n - NOT -")
console.log(condicao_a && !condicao_b)

// qualquer um precisa dar verdedeiro para dar True
console.log("\n - OR -")
console.log(condicao_a || condicao_b)
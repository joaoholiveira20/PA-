// Exercício.

// Crie um vetor co,m nome de familiares.
// Com seis nomes.

// use todos os comando vbistos em vetores após criar a lista.

const ListaDeNomes = ["joao", "Kethelen", "Jaqueline", "Vilma", "Luiz", "Caramelo"]

console.log("Exibindo todos os elementos: ")
console.log(ListaDeNomes)

console.log("\nExibindo apenas o primeiro elemento: ")
console.log(ListaDeNomes[0])

console.log("\nAdicionando um elemento: ")
ListaDeNomes.push("Amora")
console.log(ListaDeNomes)

console.log("\nRemovendo um elemento: ")
ListaDeNomes.splice(3,1)
console.log(ListaDeNomes)

console.log("\nRemovendo o terceiro elemento: ")
ListaDeNomes.splice(2,1)
console.log(ListaDeNomes)

console.log("\nRemovendo o último elemento: ")
ListaDeNomes.pop()
console.log(ListaDeNomes)

console.log("\nRemovendo o primeiro elemento: ")
ListaDeNomes.shift()
console.log(ListaDeNomes)
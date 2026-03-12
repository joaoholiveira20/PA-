// Exemplo com vetor de nomes
const listaDenomes = ["Ana", "Maria", "Joana"]

//Exemplo com vetor de números
const listaDeNumeros = [1, 2, 3, 4, 5]

// Vetor de objetos com dados de nome e idade
// um objeto carrega dados como uma classes
const listaDeUsuarios = [
    {nome: "Ana", idade: 25},
    {nome: "Maria", idade: 35},
    {nome: "Joana", idade: 45},
    {nome: "José", idade: 16},
]

// Percorrendo e exibindo os elementos do vetor.
// ForEach é uma função com laço de repetição
console.log("Exibindo todos os usúarios do vetor.")
// Use as {} caso precise de mais de uma linha.
// Neste caso não precisa, mas vamos usar.
listaDeUsuarios.forEach( u => {
    console.log(`${u.nome} tem ${u.idade} anos`)
})

// Como os antigos
// console.log("\nExibindo todos os usuários do vetor. ")
// for (let i = 0; i < listaDeUsuarios.length; i++) {
//     console.log(`${listaDeUsuarios[i].nome} tem ${listaDeUsuarios[i].idade} anos.`)
// }

console.log("\nFiltrando maiores de 18 anos.")
const maioridade = listaDeUsuarios.filter(usuario => usuario.idade >= 18)
// Use as {} caso precise de mais de uma linha.
// Neste caso não precisa, por isso não vamos usar.
maioridade.forEach( usuario =>  
    console.log(`${usuario.nome} tem ${usuario.idade} anos`)
)

console.log("\nFiltrando menores de 18 anos.")
const menoridiade = listaDeUsuarios.filter(usuario => usuario.idade < 18)
menoridiade.forEach(usuario =>
    console.log(`${usuario.nome} tem ${usuario.idade} anos`)
)


console.log("\nNa lista de números, filtre e mostre apenas números pares.")
const pares = listaDeUsuarios.filter(usuario => usuario.idade % 2 == 0)
pares.forEach( usuario =>
    console.log(`Números pares: ${usuario.idade}`)
)

console.log("\nNa lista de nomes, mostre todos os nomes com foreach.")
const nomes = listaDeUsuarios.filter(usuario => usuario.nome)
nomes.forEach( usuario => 
    console.log(`Nomes dos usuários: ${usuario.nome}`)
)
const listaDeAlunos = [
    {nome: "Ana", nota: 5.0},
    {nome: "Bruno", nota: 10.0},
    {nome: "Carla", nota: 2.0},
    {nome: "Andrea", nota: 7.0},
    {nome: "Marta", nota: 5.0}
]

console.log("Encontre a aluna Marta e mostra o nome e a média dela.")
const alunaEncontrada = listaDeAlunos.find(u => u.nome === "Marta")
console.log(`Nome: ${alunaEncontrada.nome} \nMédia: ${alunaEncontrada.nota}`)

console.log("\nMostre a média geral da turma.")
const mediaGeral = listaDeAlunos.reduce((total, aluno) => total + aluno.nota / 5, 0)
console.log(`A média geral é: ${mediaGeral}`)

console.log("\nMostre o nome e a nota dos alunos com nota abaixo de 7.0.")
const alunoAbaixo = listaDeAlunos.filter(aluno => aluno.nota <= 7.0 )
alunoAbaixo.forEach(aluno =>
    console.log(`nome: ${aluno.nome} \nNota: ${aluno.nota}`)
)

console.log("\nMostre apenas o nome dos alunos com nota maior ou igual a 7.0.")
const alunoAcima = listaDeAlunos.filter(aluno => aluno.nota >= 7.0 )
alunoAcima.forEach(aluno =>
    console.log(`nome: ${aluno.nome} \nNota: ${aluno.nota}`)
)
function mediaaluno () {
    const primeiranota = document.getElementById("nota1")
    const segundanota = document.getElementById("nota2")
    const terceiranota = document.getElementById("nota3")

    let nota1 = parseFloat(primeiranota.value)
    let nota2 = parseFloat(segundanota.value)
    let nota3 = parseFloat(terceiranota.value)

    const resultadoDiv = document.getElementById("resultadoMedia")
    resultadoDiv.innerHTML = "";

    // validação das notas
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        resultadoDiv.innerHTML = "<p>Por favor, insira todas as notas</p>"
        return;
    }

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
        alert("Nota inválida! Por favor, digite um valor numérico entre 0 e 10")
        return;
    } 

    let media = (nota1 + nota2 + nota3) / 3
    let statusaluno;

    if (media >= 7) {
        statusaluno = "Aprovado :)"
    } else if (media > 5) {
        statusaluno = "Recuperação :|"
    } else {
        statusaluno = "Reprovado :("
    }

    // Mostrando resultado
    resultadoDiv.innerHTML = ` 
    <h2>RESULTADO MÉDIA</h2>
    <p>Sua Média: ${media}</p>
    <p>seu status: ${statusaluno}</p>`

    divResultado.classList.add("animar-resultado");
}

const botaogerar = document.getElementById("btngerar")
botaogerar.addEventListener("click", mediaaluno)
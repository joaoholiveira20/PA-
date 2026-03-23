function aposentadoria() {
    const numeromatricula = document.getElementById("matricula")
    const anosidade = document.getElementById("idadeemano")
    const anostrabalho = document.getElementById("tempoemanos")

    let matricula = parseInt(numeromatricula.value)
    let idade = parseInt(anosidade.value)
    let trabalho = parseInt(anostrabalho.value)

    const resultadoDiv = document.getElementById("resultadoAposentadoria")
    resultadoDiv.innerHTML = "";

    if (isNaN(matricula) || isNaN(idade) || isNaN(trabalho)) {
        resultadoDiv.innerHTML = "<p> Por favor, adicione os requerimentos</p>"
        return;
    }


    let idadeconvertida = 2026 - idade
    let resaposentadoria;

    if (idadeconvertida >= 65 || trabalho >= 30) {
        resaposentadoria = "Requerer aposentadoria"       
    } else {
        resaposentadoria = "Não requerer aposentadoria"
    }

    // Mostrando resultados
    resultadoDiv.innerHTML = `
        <h2>Mostrando Resultado</h2>
        <p>Sua matrícula: ${matricula}</p>
        <p>Sua idade: ${idadeconvertida}</p>
        <p>Seu tempo de trabalho: ${trabalho}</p>
        <p>Resultado: ${resaposentadoria}</p>
        `

}

const botaogerar = document.getElementById("btngerar")
botaogerar.addEventListener("click", aposentadoria)
function Gerarcalculos() {
    const num1 = document.getElementById("numeroInput1");
    const num2 = document.getElementById("numeroInput2");
    let numero1 = parseInt(num1.value);
    let numero2 = parseInt(num2.value);

    const resultadoDiv = document.getElementById("Resultadocalculos");
    resultadoDiv.innerHTML = "";

    if (isNaN(numero1) || numero1 === null || numero1 === "" || isNaN(numero2) || numero2 === null || numero2 === "") {
        resultadoDiv.innerHTML = "<p>Por favor, insira os números.</p>";
        return;
    }

    resultadoDiv.innerHTML += `<h2> Resultados dos cálculos entre ${numero1} e ${numero2}</h2>`;
    resultadoDiv.innerHTML += `<p> média: ${numero1} + ${numero2} / 2 = ${ (numero1 + numero2) / 2 } </p>`;
    resultadoDiv.innerHTML += `<p> produto: ${numero1} * ${numero2} = ${numero1 * numero2} </p>`;
    resultadoDiv.innerHTML += `<p> ${numero1} / ${numero2} = ${numero1 / numero2} </p>`;
}

const botaoGerar = document.getElementById("btnGerar");
botaoGerar.addEventListener("click", Gerarcalculos);
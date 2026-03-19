function Gerarcalculos() {
    const num1 = document.getElementById("numeroInput1");
    const num2 = document.getElementById("numeroInput2");
    let numero1 = parseInt(num1.value);
    let numero2 = parseInt(num2.value);

    const resultadoDiv = document.getElementById("Resultadocalculos");
    
    // Limpa o resultado anterior antes de colocar o novo
    resultadoDiv.innerHTML = "";

    // Validação
    if (isNaN(numero1) || numero1 === "" || isNaN(numero2) || numero2 === "") {
        // Até a mensagem de erro vai aparecer animada!
        resultadoDiv.innerHTML = `
            <div class="resultado-animado">
                <p>Por favor, insira os números.</p>
            </div>`;
        return;
    }

    let maior = Math.max(numero1, numero2);
    let menor = Math.min(numero1, numero2);

    // Montamos todo o HTML dentro de uma div com a classe "resultado-animado"
    let conteudoAnimado = `
        <div class="resultado-animado">
            <h2>Resultados dos cálculos entre ${numero1} e ${numero2}</h2>
            <p>Média = ${(numero1 + numero2) / 2}</p>
            <p>Produto = ${numero1 * numero2}</p>
            <p>Soma = ${numero1 + numero2}</p>
            <p>Maior número: ${maior}</p>
            <p>Menor número: ${menor}</p>
        </div>
    `;

    // Jogamos o pacote completo e animado na tela
    resultadoDiv.innerHTML = conteudoAnimado;
}

const botaoGerar = document.getElementById("btnGerar");
botaoGerar.addEventListener("click", Gerarcalculos);
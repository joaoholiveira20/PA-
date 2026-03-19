function calcularMediaAluno() {
    // 1. Pegando os valores digitados nos 3 inputs
    const num1 = document.getElementById("numeroInput1").value;
    const num2 = document.getElementById("numeroInput2").value;
    const num3 = document.getElementById("numeroInput3").value;

    // 2. Convertendo de texto para número decimal (para aceitar notas quebradas)
    let nota1 = parseFloat(num1);
    let nota2 = parseFloat(num2);
    let nota3 = parseFloat(num3);

    // 3. Pegando a div onde vai aparecer a resposta
    const divResultado = document.getElementById("calcularmedia");
    divResultado.innerHTML = ""; // Limpa a tela antes de calcular de novo

    // 4. Validação de erro (se o usuário não digitar nada)
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        divResultado.innerHTML = `
            <div class="resultado-animado" style="border-left: 5px solid #f59e0b; padding: 15px; background: #f8fafc; border-radius: 8px;">
                <p>⚠️ Por favor, digite as três notas.</p>
            </div>`;
        return; // Para o código aqui se der erro
    }

    // 5. Calculando a média
    let media = (nota1 + nota2 + nota3) / 3;

    // 6. Verificando se passou ou rodou
    let statusAluno = "";
    let corBorda = "";

    if (media >= 7) {
        statusAluno = "Aprovado! 🎉";
        corBorda = "#10b981"; // Borda verde de sucesso
    } else {
        statusAluno = "Reprovado. 😔";
        corBorda = "#ef4444"; // Borda vermelha de reprovação
    }

    // 7. Mostrando o resultado final com a animação da Apple!
    divResultado.innerHTML = `
        <div class="resultado-animado" style="border-left: 5px solid ${corBorda}; padding: 15px; background: #f8fafc; border-radius: 8px;">
            <p><strong>Média Final:</strong> ${media.toFixed(1)}</p>
            <p><strong>Status:</strong> ${statusAluno}</p>
        </div>
    `;
}

// 8. Dizendo para o botão ouvir o clique e rodar a função
const botaoGerar = document.getElementById("btngerar");
botaoGerar.addEventListener("click", calcularMediaAluno);
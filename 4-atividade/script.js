function Mostrarobrigacao() {
    const numeroidade = document.getElementById("numeroIdade");
    // Usando .value para pegar o texto que a pessoa digitou
    let idade = parseInt(numeroidade.value);

    const resultadoDiv = document.getElementById("gerarResultado");
    resultadoDiv.innerHTML = "";

    // 1. Validação (Com o freio de mão ativado!)
    if (isNaN(idade) || numeroidade.value === "") {
        resultadoDiv.innerHTML = `
            <div class="resultado-animado" style="border-left-color: #f59e0b;">
                <p>⚠️ Por favor, digite a sua idade!</p>
            </div>`;
        return; // Para tudo aqui
    }

    let statusdevotacao = "";
    let corDaBorda = "";

    // 2. A Lógica em Cascata
    if (idade < 16) {
        statusdevotacao = "Você não pode votar!";
        corDaBorda = "#ef4444"; // Vermelho

    } else if (idade >= 18 && idade < 70) {
        statusdevotacao = "Seu voto é obrigatório! 🗳️";
        corDaBorda = "#009c3b"; // Verde Brasil

    } else {
        // Se não é menor que 16, e não está entre 18 e 69...
        // Só sobraram os de 16, 17 e 70+. Cai direto aqui!
        statusdevotacao = "Seu voto é opcional (facultativo).";
        corDaBorda = "#ffdf00"; // Amarelo Brasil
    }

    // 3. O Grand Finale (Mostrando na tela com a animação)
    resultadoDiv.innerHTML = `
        <div class="resultado-animado" style="border-left-color: ${corDaBorda};">
            <p><strong>Idade:</strong> ${idade} anos</p>
            <p><strong>Situação:</strong> ${statusdevotacao}</p>
        </div>
    `;

//     resultadoDiv.innerHTML = `
//         <p>Idade:</strong> ${idade} anos</p>
//         <p>Situação:</strong> ${statusdevotacao}</p>`
}

const botaogerar = document.getElementById("btngerar");
botaogerar.addEventListener("click", Mostrarobrigacao);
   
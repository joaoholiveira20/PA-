function calcularTomate() {
    const qtntomate = document.getElementById("numberInput")
    let tomate = parseInt(qtntomate.value)

    const resultadoDiv = document.getElementById("gerarResultado")
    resultadoDiv.innerHTML = "";


    if (isNaN(tomate)) {
        resultadoDiv.innerHTML = `<p>Por favor, Digite a quantidade</p>`;
        return;
    }

    let menosduzia = 1.30
    let maisduzia = 1.00

    let resultadotomate;

    if (tomate < 12) {
        resultadotomate = tomate * menosduzia 
        
    } else {
        resultadotomate = tomate * maisduzia
        
    }

    // let Resultado = `
    //     <h2>Valor da compra</h2>
    //     <p>${resultadotomate}</p>
    // `;

    // Mostrando resultado
    resultadoDiv.innerHTML = `
        <h2>Valor da compra</h2>
        <p>R$ ${resultadotomate.toFixed(2)}</p>`
}

const gerarbotao = document.getElementById("btngerar")
gerarbotao.addEventListener("click", calcularTomate)
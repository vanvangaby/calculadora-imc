document.getElementById('calcular').addEventListener('click', function() {
    // Obtendo os valores do peso e da altura
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Verificando se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos.";
        return;
    }

    // Calculando o IMC
    const imc = peso / (altura * altura);
    
    // Definindo a situação com base no IMC
    let situacao;
    if (imc < 18.5) {
        situacao = "está abaixo do peso ideal";
    } else if (imc >= 18.5 && imc < 25) {
        situacao = "Peso ideal";
    } else if (imc >= 25 && imc < 30) {
        situacao = "Acima do Peso";
    } else {
        situacao = "Obesidade";
    }

    // Exibindo o resultado
    document.getElementById('resultado').innerText = `Seu IMC é: ${imc.toFixed(2)} - ${situacao}`;
});

// Inicializa o número inserido como fora do intervalo válido
var numero = 0;

while (numero < 10 || numero > 25) {
    numero = parseInt(prompt("Digite um número entre 10 e 25:"));

    if (numero < 10 || numero > 25) {
        alert("Entrada inválida. Tente novamente.");
    }
}

// Se chegou aqui, o número é válido
alert("Número digitado: " + numero);

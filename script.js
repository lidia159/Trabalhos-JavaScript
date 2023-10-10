document.getElementById("mostrarMenu").addEventListener("click", function () {
    var escolha = prompt(
        "Escolha na lista o que você quer que se faça:\n" +
        "1 - Imprimir números de 1 a 10\n" +
        "2 - Imprimir os números ímpares menores que 100\n" +
        "3 - Imprimir a tabuada do número 8\n" +
        "4 - Imprimir todas as tabuadas do número 1 ao 10"
    );

    switch (escolha) {
        case "1":
            imprimirNumerosDeUmADez();
            break;
        case "2":
            imprimirImparesMenoresQueCem();
            break;
        case "3":
            imprimirTabuadaDoOito();
            break;
        case "4":
            imprimirTodasTabuadas();
            break;
        default:
            alert("Escolha inválida!");
    }
});

function imprimirNumerosDeUmADez() {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";

    for (var i = 1; i <= 10; i++) {
        resultadoDiv.innerHTML += i + "<br>";
    }
}

function imprimirImparesMenoresQueCem() {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";

    for (var i = 1; i < 100; i += 2) {
        resultadoDiv.innerHTML += i + "<br>";
    }
}

function imprimirTabuadaDoOito() {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";

    for (var i = 1; i <= 10; i++) {
        resultadoDiv.innerHTML += "8 x " + i + " = " + (8 * i) + "<br>";
    }
}

function imprimirTodasTabuadas() {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";

    for (var i = 1; i <= 10; i++) {
        resultadoDiv.innerHTML += "<h3>Tabuada do " + i + "</h3>";
        for (var j = 1; j <= 10; j++) {
            resultadoDiv.innerHTML += i + " x " + j + " = " + (i * j) + "<br>";
        }
    }
}

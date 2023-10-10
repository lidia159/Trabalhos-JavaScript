// Número de linhas desejadas
var numeroLinhas = 5;

// Loop externo para as linhas
for (var i = 1; i <= numeroLinhas; i++) {
    var linha = "";

    // Loop interno para as estrelas em cada linha
    for (var j = 1; j <= i; j++) {
        linha += "*";
    }

    console.log(linha);
}

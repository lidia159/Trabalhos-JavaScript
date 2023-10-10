// Número de linhas desejadas
var numeroLinhas = 4; // Altere esse valor para ajustar o número de linhas desejado

// Número de hashtags em cada linha
var numeroHashtags = 5; // Altere esse valor para ajustar o número de hashtags em cada linha

// Loop externo para as linhas
for (var i = 1; i <= numeroLinhas; i++) {
    var linha = "";

    // Loop interno para as hashtags em cada linha
    for (var j = 1; j <= numeroHashtags; j++) {
        linha += "#";
    }

    console.log(linha);
}

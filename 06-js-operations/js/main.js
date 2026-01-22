//Variáveis
const idadeEu = 28;
const idadePessoa1 = 17;
const idadePessoa2 = 30;

const peso = 90;
const altura = 1.86;

const notas = [7, 5, 8, 10, 2];

const resultado = document.querySelector(".res");

// Exibe mensagens acumulando o conteúdo na tela
function mostraTexto(mensagem) {
    resultado.innerHTML += mensagem;
}


// Idades
mostraTexto(`Minha idade é: ${idadeEu}<br>`);

const somaIdades = idadeEu + idadePessoa1 + idadePessoa2;
mostraTexto(`A soma das nossas idades é: ${somaIdades}<br>`);

const mediaIdades = somaIdades / 3;
mostraTexto(`A média das nossas idades é: ${mediaIdades.toFixed(2)}<br>`);

const diferencaIdade = Math.abs(idadeEu - idadePessoa2);
mostraTexto(`A diferença de idade entre eu e meu irmão é: ${diferencaIdade} anos<br>`);

mostraTexto("<hr>");


// IMC
const imc = peso / (altura * altura);
mostraTexto(`Seu IMC (Índice de Massa Corporal) é: ${Math.round(imc)}<br>`);

mostraTexto("<hr>");

// Notas
const somaNotas = notas.reduce((total, nota) => total + nota, 0);
mostraTexto(`A soma das notas é: ${somaNotas}<br>`);

const mediaNotas = somaNotas / notas.length;
mostraTexto(`A média das notas é: ${mediaNotas.toFixed(2)}<br>`);

mostraTexto("<hr>");


// Strings, concatenação e tipos
console.log("Concatenação:", "10" + 10);     // "1010"
console.log("Concatenação:", 10 + "10");     // "1010"
console.log("String literal:", "10 + 10");   // "10 + 10"
console.log("Adição:", 10 + 10);              // 20
console.log("NaN:", "string" + 10 - 10);      // NaN

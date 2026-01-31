let resultado = document.querySelector(".res");

let texto = prompt("Digite um texto para ser invertido:");
let invertida = "";

for (let i = texto.length - 1; i >= 0; i--) {
    invertida += texto[i];
}

resultado.innerHTML = `
    <strong>Texto original:</strong> ${texto}<br>
    <strong>Texto invertido:</strong> ${invertida}
`;

console.log("Texto invertido:", invertida);

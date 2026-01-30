// Exemplo de document.write (só para estudo)
document.write("<p><strong>Exemplo:</strong> document.write em ação</p>");

//Variáveis
const idade = 28;
const anoAtual = 2026;

// mostrar no console
console.log("Olá, Mundo!");
console.log("Esse é meu segundo programa");
console.log("Minha idade é:", idade);

console.log('"25" + "25" =', "25" + "25"); // concatenação
console.log('"25" + 25 =', "25" + 25);     // concatenação
console.log("25 + 25 =", 25 + 25);         // soma

console.log("Eu nasci em:", anoAtual - idade);

console.log("A soma das nossas idades é:", 28 + 17 + 30);
console.log("A média das nossas idades é:", (28 + 17 + 30) / 3);

console.log(
    "A diferença de idade entre eu e meu irmão é de:",
    Math.abs(28 - 30),
    "anos."
);

console.log("Se passaram cerca de:", Math.round(anoAtual / idade), "gerações");
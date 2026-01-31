/**
     * OPERADORES ARITMÉTICOS
     * +  Adição / Concatenação
     * -  Subtração
     * *  Multiplicação
     * /  Divisão
     * %  Resto da divisão (módulo)
     * ** Exponenciação
     * ++ Incremento
     * -- Decremento
     */

console.log("OPERADOR + (ADIÇÃO)");

// Soma normal
console.log(50 + 50); // 100
console.log(1000 + 9000); // 10000

// Dá pra misturar contas (parênteses deixa mais fácil de entender)
console.log(10 + 20 + 20 + (100 - 50) + 100); // 200

console.log("====================================");
console.log("OPERADOR + (CONCATENAÇÃO)");
console.log("====================================");

// Quando tem texto, o + vira "juntar"
console.log("Minha idade é " + 28);

// Aqui ele só vai juntando tudo como texto
console.log("A soma das idades é: " + 10 + 10 + 10); // 101010

// Se quiser somar primeiro, usa parênteses
console.log("A soma das idades é: " + (10 + 10 + 10)); // 30

// Texto + número = vira texto
console.log("10" + 10); // 1010
console.log(10 + "10"); // 1010

// Isso dá errado porque ele tenta fazer conta depois de virar string
console.log("Nasci em: " + 2026 - 28); // NaN

// Certo: faz a conta primeiro
console.log("Nasci em: " + (2026 - 28)); // 1998

// Média (com parênteses pra não dar confusão)
console.log("A média das notas é: " + (8 + 5 + 5 + 8) / 4); // 6.5

console.log("====================================");
console.log("OPERADOR - (SUBTRAÇÃO)");
console.log("====================================");

console.log(50 - 30); // 20
console.log(100 - 50 - 40 - 9); // 1

// Math.abs deixa sempre positivo
const minhaIdade = 28;
const idadeDoIrmao = 30;

console.log(
    "Diferença de idade entre eu e meu irmão: " +
    Math.abs(minhaIdade - idadeDoIrmao) +
    " anos"
);

console.log("====================================");
console.log("OPERADOR * (MULTIPLICAÇÃO)");
console.log("====================================");

const diasNoAno = 365;

console.log(10 * 10); // 100
console.log(10 * 10 * 10); // 1000
console.log(1000 * 1000); // 1000000

// Só uma conta aproximada
console.log("Dias vividos (aproximado): " + diasNoAno * minhaIdade);

console.log("====================================");
console.log("OPERADOR / (DIVISÃO)");
console.log("====================================");

const idadeDaIrma = 17;

console.log(10 / 2); // 5
console.log(50 / 5 / 2 / 2); // 2.5

// Média das idades
console.log(
    "A média das idades é: " +
    (minhaIdade + idadeDoIrmao + idadeDaIrma) / 3
);

console.log("====================================");
console.log("OPERADOR % (RESTO DA DIVISÃO)");
console.log("====================================");

console.log(10 % 5); // 0
console.log(10 % 4); // 2
console.log(5 % 2); // 1

// Resto também dá pra usar em conta normal
console.log(10 + (10 % 3)); // 11

// par ou ímpar
const numeroParaTeste = 2;
const ehPar = numeroParaTeste % 2 === 0;

console.log(
    "O número " + numeroParaTeste + " é " + (ehPar ? "Par" : "Ímpar")
);

console.log("====================================");
console.log("OPERADOR ** (EXPONENCIAÇÃO)");
console.log("====================================");

console.log(2 ** 3); // 8
console.log(5 ** 2); // 25

console.log("====================================");
console.log("INCREMENTO (++) e DECREMENTO (--)");
console.log("====================================");

let contador = 10;

console.log(contador); // 10
contador++;
console.log(contador); // 11

// Mostra primeiro e depois diminui
console.log(contador--); // 11
console.log(contador); // 10

// Diminui primeiro e depois mostra
console.log(--contador); // 9

console.log("====================================");
console.log("OPERADORES DE ATRIBUIÇÃO");
console.log("====================================");

// Atribuição normal
const carro = "Palio";
console.log(carro);

const numeroExemplo = 100;
console.log(numeroExemplo);

console.log("====================================");
console.log("AUTO-ATRIBUIÇÃO (+=, -=, *=, /=)");
console.log("====================================");

let x = 10;

// Jeito mais longo
x = x + 10;

// Jeito mais rápido
x += 90;
x -= 100;
x *= 2;
x /= 4;

console.log(x); // 5

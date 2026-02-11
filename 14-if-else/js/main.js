//  AULA COMPLETA - IF / ELSE

// 1 - Exemplo básico

let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

// 2 -  Exemplo com nota

let nota = 7;

if (nota >= 6) {
    console.log("Aluno aprovado");
} else {
    console.log("Aluno reprovado");
}

// 3 - Exemplo com múltiplas condições

let media = 8;

if (media >= 9) {
    console.log("Desempenho excelente");
} else if (media >= 7) {
    console.log("Desempenho bom");
} else if (media >= 6) {
    console.log("Desempenho regular");
} else {
    console.log("Desempenho insuficiente");
}

// 4 - Par ou ímpar

let numero = 10;

if (numero % 2 === 0) {
    console.log("Número par");
} else {
    console.log("Número ímpar");
}

//  5 - Positivo, negativo ou zero

let valor = -3;

if (valor > 0) {
    console.log("Número positivo");
} else if (valor < 0) {
    console.log("Número negativo");
} else {
    console.log("Zero");
}

// 6 - Login simple

let usuario = "admin";
let senha = "1234";

if (usuario === "admin" && senha === "1234") {
    console.log("Login autorizado");
} else {
    console.log("Usuário ou senha inválidos");
}

// 7 - Verificação de dia da semana

let dia = "domingo";

if (dia === "sábado" || dia === "domingo") {
    console.log("Fim de semana");
} else {
    console.log("Dia útil");
}

// 8 - Pode dirigir?

let idadeMotorista = 17;
let temCNH = false;

if (idadeMotorista >= 18) {
    if (temCNH === true) {
        console.log("Pode dirigir legalmente");
    } else {
        console.log("Precisa tirar CNH");
    }
} else {
    console.log("Menor de idade - não pode dirigir");
}

// 9 - Maior de dois números

let a = 25;
let b = 12;

if (a > b) {
    console.log("A é maior que B");
} else if (b > a) {
    console.log("B é maior que A");
} else {
    console.log("Os dois são iguais");
}

// 10 - Sistema de desconto

let valorCompra = 150;

if (valorCompra >= 200) {
    console.log("Desconto de 20%");
} else if (valorCompra >= 100) {
    console.log("Desconto de 10%");
} else {
    console.log("Sem desconto");
}


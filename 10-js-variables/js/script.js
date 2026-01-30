// VARIÁVEIS EM JAVASCRIPT (simples)

let nome = "Brenno";
console.log(nome);

// FORMAS DE DECLARAR VARIÁVEIS: var, let, const

// var (antigo e não recomendado hoje)
var idade = 28;
console.log(idade);

// let (recomendado para valores que podem mudar)
let sobreNome = "Alencar";
sobreNome = "Silva"; // reatribuiu o valor
console.log(sobreNome); // "Silva"

// const (recomendado para valores fixos)
const pi = 3.14;
console.log(pi);

const fruta = "Manga";
// fruta = "Morango"; // Erro: const não pode ser reatribuída
console.log(fruta);

// TIPOS DE DADOS EM JAVASCRIPT

// String
let nomeTeste = "Brenno";
let frase = "JavaScript é top";

// Number
let idadePedro = 20;
let altura = 1.7;

// Boolean (true ou false)
let aprovado = true;
let maiorIdade = false;

// undefined (não definido)
let cidade;
console.log(cidade); // undefined

// null (vazio proposital)
let telefone = null;
console.log(telefone);

// Objeto (chave: valor)
let pessoa = {
  nome: "Brenno",
  idade: 28,
  altura: 1.87,
};

// Para acessar valores do objeto: nomeObjeto.propriedade
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.altura);

// Array (lista de dados)
let frutas = ["Uva", "Maçã", "Morango"];
console.log(frutas); // mostra o array todo
console.log(frutas[0]); // "Uva"
// ARRAYS E OBJETOS

// 1 - Arrays
const numeros = [1, 2, 3];

console.log(numeros); // [1, 2, 3]
console.log(numeros[0]); // 1 -> sempre começa no índice 0

// Podemos guardar todo tipo de valores
const itens = ["Brenno", true, 28, 1.86, ["Array dentro de array", "Brenno", "Alencar"]];

console.log(itens); 
console.log(itens[1]); // true
console.log(itens[4][0]); // Array dentro de array

// 2 - Propriedades
console.log(itens.length); // 5 -> tamanho do array (mais usado)
console.log(itens["length"]); // 5
console.log(itens[0].indexOf("r")); // letra "r" está no índice 1

const myString = "Hello World";

console.log(myString.toLowerCase()); // hello world
console.log(myString.toUpperCase()); // HELLO WORLD

// 3 - Métodos
const outrosNumeros = [4, 5, 6];
const allNumeros = numeros.concat(outrosNumeros);

console.log(allNumeros); // [1, 2, 3, 4, 5, 6]

// 4 - Objetos
const pessoa = {
  nome: "Brenno",
  idade: 28,
  altura: 1.86,
  profissao: "Desenvolvedor",
  casado: false
};

pessoa.nome = "Eduardo"; // altera o valor
pessoa.peso = 90;        // adiciona uma nova propriedade
delete pessoa.altura;   // remove a propriedade

console.log(pessoa);
console.log(pessoa.nome); // Eduardo

// Lista de objetos
const listaPessoas = [
  {
    nome: "Brenno",
    email: "bre@gmail.com",
    idade: 28,
    casado: false,
    telefone: "62-993002421"
  },
  {
    nome: "Kaio",
    email: "kaio@gmail.com",
    idade: 30,
    casado: true,
    telefone: "62-99300000"
  },
  {
    nome: "Guilherme",
    email: "gui@gmail.com",
    idade: 27,
    casado: true,
    telefone: "62-993002323"
  }
];

console.log(listaPessoas);

listaPessoas[0].nome = "Eduardo";

// Remove o terceiro item (mantém o índice, mas deixa vazio)
delete listaPessoas[2];

console.log(listaPessoas[0].nome);
console.log(listaPessoas[0].casado);
console.log(listaPessoas[0].telefone);

// Object.assign
const teste = {
  a: "teste",
  b: "teste2"
};

const objTeste = {
  c: []
};

Object.assign(objTeste, teste);

console.log(teste);
console.log(objTeste); // { c: [], a: 'teste', b: 'teste2' }

// Verificação de tipo
console.log(teste instanceof Object); // true

// Métodos úteis de objetos
console.log(Object.keys(pessoa));    // retorna as chaves
console.log(Object.entries(pessoa)); // retorna chave + valor
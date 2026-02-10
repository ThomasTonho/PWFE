/*console.log("Olá, mundo!");
var a = 1;
let b = 2;
const c = 3;

console.log(a);
console.log(b);
console.log(c);

// alert("Thomás");
//const nome = prompt("Digite seu nome:");
//console.log("Olá, " + nome + "!");

/*console.log(confirm("Você gosta de JavaScript?"));*/


//---------------EXERCICIOS---------------//


// exercicio 1 

const nome = prompt("Qual é o seu nome?");
alert(`Olá, ${nome}!`);
console.log("Olá " + nome + "!")

// exercicio 2

const materiafav = prompt("Qual é a sua matéria favorita?");
alert(`A materia ${materiafav} é realmente otima!`);
console.log(`A materia ${materiafav} é realmente otima!`)

// exercicio 3

const datahoje = prompt("Qual é a data de hoje?");
alert(`Hoje é ${datahoje}!`);
console.log(`Hoje é ${datahoje}!`)

// exercicio 4
console.log(confirm("Está preparado para o segundo semestre de desenvolvimento de sistemas?"));

// exercicio 5

const n1 = Number(prompt("Digite o primeiro número:"));
const n2 = Number(prompt("Digite o segundo número:"));
const resultado = n1 + n2;
alert(`A soma dos números é: ${resultado}`);
console.log(`A soma dos números é: ${resultado}`);

// exercicio 6

const nota1 = Number(prompt("Digite a primeira nota:"));
const nota2 = Number(prompt("Digite a segunda nota:"));
const nota3 = Number(prompt("Digite a terceira nota:"));
const media = (nota1 + nota2 + nota3) / 3;
alert(`A media das notas é: ${media}`);
console.log(`A media das notas é: ${media}`);

// exercicio 7 
const largura = Number(prompt("Digite a largura da parede:"));
const altura = Number(prompt("Digite a altura da parede:"));
const area = largura * altura;
const litros = area / 2;
alert(`São necessarios: ${litros} litros de tinta`);
console.log(`São necessarios: ${litros} litros de tinta`);


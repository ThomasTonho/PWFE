// EXERCICIO 1

const numero = Number(prompt("Digite um número:"));

if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}
if (numero % 3 === 0) {
    console.log("O número é múltiplo de 3.");
}
if (numero % 5 === 0) {
    console.log("O número é múltiplo de 5.");
}


// EXERCICIO 2

const n1 = Number(prompt("Digite um número: "));
const n2 = Number(prompt("Digite outro número: "));
const n3 = Number(prompt("Digite mais um número: "));

if (n1 > n2) {
    if (n1 > n3) {
        console.log("Primeiro número digitado é o maior");
    } else {
        console.log("Terceiro número digitado é o maior");
    }
} else {
    if (n2 > n3) {
        console.log("Segundo número digitado é o maior");
    } else {
        console.log("Terceiro número digitado é o maior");
    }
}

// EXERCICIO 3 

const tipo_temperatura = (prompt("CELSIUS ou FARENHEIT ( C ou F) ? "))
const temperatura = Number(prompt("Digite a temperatura: "));

if (tipo_temperatura === "C") {
    const fahrenheit = (temperatura * 9/5) + 32;
    console.log(`A temperatura em Celsius é: ${temperatura}°C`);
    console.log(`A temperatura convertida em Fahrenheit é: ${fahrenheit}°F`);
}
else if (tipo_temperatura === "F") {
    const celsius = (temperatura - 32) * 5/9;
    console.log(`A temperatura em Fahrenheit é: ${temperatura}°F`);
    console.log(`A temperatura convertida em Celsius é: ${celsius}°C`);
}
else {
    console.log("Tipo de temperatura inválido. Por favor, escolha 'CELSIUS' ou 'FARENHEIT'.");
}

// EXERCICIO 4

const velocidade = Number(prompt("Qual a velocidade do veículo?"));

if (velocidade > 80) {
    const multa = (velocidade - 80) * 5;
    console.log("Você foi multado por excesso de velocidade.");
    console.log("Valor da multa: R$ " + multa);
} else {
    console.log("Você está dentro do limite de velocidade.");
}


// EXERCICIO 5

const distancia = Number(prompt("Qual a distancia que deseja percorrer?"))

if (distancia <= 200) {
    const valor = distancia * 0.50;
    console.log(`O valor da passagem é: R$ ${valor}`);
}
else if (distancia > 200) {
    const valor = distancia * 0.45;
    console.log(`O valor da passagem é: R$ ${valor}`);
}


// EXERCICIO 6

const ano_nasc = Number(prompt("Qual ano que você nasceu?"))
const pode_votar = 2026 - ano_nasc

if (pode_votar >= 16) {
    console.log("Você pode votar.");
}
else {
    console.log("Você ainda não pode votar.");
}

// EXERCICIO 7

const ano_atual = Number(prompt("Qual é o ano atual?"));

const bissexto = (ano_atual % 4 === 0 && ano_atual % 100 !== 0) || ano_atual % 400 === 0;

console.log(bissexto ? "O ano é bissexto." : "O ano não é bissexto.");

// EXERCICIO 8

const ano_nasc2 = Number(prompt("Qual ano que você nasceu?"))
const idade = 2026 - ano_nasc2

if (idade < 18) {
    const faltam = 18 - idade
    console.log(`Você ainda não pode se alistar. Faltam ${faltam} ano(s) para o alistamento.`)
} 
else if (idade === 18) {
    console.log("Está na hora de se alistar!")
} 
else {
    const passou = idade - 18
    console.log(`Você já passou do tempo de alistamento. Já se passaram ${passou} ano(s).`)
}





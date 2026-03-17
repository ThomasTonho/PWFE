
// EXEMPLO
const btn1 = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function btnChange(e) {
    let color = 
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    document.body.style.backgroundColor = color;
    console.log(e);
}

btn1.addEventListener("click", btnChange);


/* EXERCICIOS

 1 - Contador um botão que some(+1) toda vez que é clicado

 2 - Mini card
    (uma imagem, nome, texto)
    botão para mudar o fundo do card

 3 - Barra digitação (Desafio)
    (Criar barra de texto, conforme o usuário escreva apareça)
*/


// EXERCICIO 1

const btn2 = document.querySelector('#btn2');
const count = document.querySelector('#adicionar');

function btnsoma(e) {
    let adicionarValue = parseInt(count.textContent);
    adicionarValue += 1;
    count.textContent = adicionarValue;

}

btn2.addEventListener("click", btnsoma);

// EXERCICIO 2

const btn3 = document.querySelector('#btn3');
const card = document.querySelector('.card');

function btnCard(e) {
    let color = 
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    card.style.backgroundColor = color;
    console.log(e);
}

btn3.addEventListener("click", btnCard)

// EXERCICIO 3

const input = document.querySelector('#input1');
const texto = document.querySelector('#display');
const texto2 = document.querySelector('#display2');

function displayTexto() {
    texto.textContent = input.value;
    texto2.textContent = input.value.split('') 
}

input.addEventListener("input", displayTexto)
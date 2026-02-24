// Condicional Ternário

let isBirthday = confirm("Hoje é seu aniversário?");

let helou = isBirthday ? "Parabéns!" : "Bom dia";

console.log(helou);

// FOR 

/* for (inicialização; condição saida; expressão final) {
/      código a ser executado
} */

let personagens = ["Naruto", "Sasuke", "Sakura", "Kakashi"];
let info = "Personagens de naruto: "

for (let i = 0; i < personagens.length ; i++){
    info += personagens[i] + ", ";
}

console.log(info);

// WHILE

/* while (condição) {
    código a ser executado
} */

let personagens2 = ["Rock lee", "Guy", "Neji", "Tenten"];
let info2 = "Personagens de naruto: "
let i = 0;

while (i < personagens2.length) {
    if (i === personagens2.length - 1) {
        info2 += "e " + personagens2[i] + ".";
    }
    else {
    info2 += personagens2[i] + ", ";
}
    i++;
}

console.log(info2);

// DO WHILE

/* do {
    código a ser executado
} while (condição); */

let personagens3 = ["Asuma", "Shikamaru", "Ino", "Choji"];
let info3 = "Personagens de naruto: "
let j = 0;

do {
    if (j === personagens3.length - 1) {
        info3 += "e " + personagens3[j] + ".";
    }
    else {
    info3 += personagens3[j] + ", ";
}
    j++;
} while (j < personagens3.length);

console.log(info3);

// FUNCÕES

function soma(a, b) {
    return a + b;
}

console.log(soma(5, 3)); 

// FUNCOES ANONIMAS

let som = function (n1, n2){
    return n1 + n2
}

console.log(som(3,4))

// ARROW FUNCTION

let arrow = (num1, num2) =>{
    return num1 + num2
}

console.log(arrow(10,21))
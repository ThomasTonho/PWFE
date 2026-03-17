function falaDoido() {
    const verbo = document.getElementById("verbo").value;
    const nome = document.getElementById("nome").value;
    const adjetivo = document.getElementById("adjetivo").value;
    
    const frase = document.getElementById("frase")

    frase.innerHTML = `O ${nome} é ${verbo} pra fazer ${adjetivo}!`;
}

const botao = document.getElementById("botao");
botao.addEventListener("click", falaDoido);
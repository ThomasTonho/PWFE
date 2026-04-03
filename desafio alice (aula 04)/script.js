(function () {
  const artigo = document.querySelector('.resumo');
  const inputLetras = document.getElementById('letras');
  const inputPalavra = document.getElementById('palavra');
  const saidaContagem = document.getElementById('contagem-resultado');

  if (!artigo || !inputLetras || !inputPalavra || !saidaContagem) return;

  const htmlOriginal = artigo.innerHTML;
  const textoPlanoOriginal = artigo.textContent;

  function contarOcorrenciasPalavra(texto, termo) {
    const t = termo.trim().toLowerCase().normalize('NFC');
    if (!t) return 0;
    const tokens = texto.toLowerCase().normalize('NFC').match(/\p{L}+/gu);
    if (!tokens) return 0;
    return tokens.filter((w) => w === t).length;
  }

  function destacarPorComprimento(elemento, n) {
    const partes = elemento.textContent.split(/(\p{L}+)/gu);
    const frag = document.createDocumentFragment();
    for (const parte of partes) {
      if (!parte) continue;
      if (/^\p{L}+$/u.test(parte) && parte.length === n) {
        const mark = document.createElement('mark');
        mark.className = 'destaque-letras';
        mark.textContent = parte;
        frag.appendChild(mark);
      } else {
        frag.appendChild(document.createTextNode(parte));
      }
    }
    elemento.textContent = '';
    elemento.appendChild(frag);
  }

  function atualizar() {
    artigo.innerHTML = htmlOriginal;

    const n = parseInt(inputLetras.value, 10);
    if (Number.isFinite(n) && n > 0) {
      artigo.querySelectorAll('h1, p').forEach((el) => destacarPorComprimento(el, n));
    }

    const termo = inputPalavra.value;
    const qtd = contarOcorrenciasPalavra(textoPlanoOriginal, termo);
    if (!termo.trim()) {
      saidaContagem.textContent = '';
    } else if (qtd === 0) {
      saidaContagem.textContent = `A palavra “${termo.trim()}” não aparece no texto.`;
    } else if (qtd === 1) {
      saidaContagem.textContent = `A palavra “${termo.trim()}” aparece 1 vez.`;
    } else {
      saidaContagem.textContent = `A palavra “${termo.trim()}” aparece ${qtd} vezes.`;
    }
  }

  inputLetras.addEventListener('input', atualizar);
  inputPalavra.addEventListener('input', atualizar);
})();

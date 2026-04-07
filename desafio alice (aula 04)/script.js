document.addEventListener('DOMContentLoaded', () => {
    const letrasInput = document.getElementById('letras');
    const palavraInput = document.getElementById('palavra');
    const resumo = document.querySelector('.resumo');
    const resultados = document.getElementById('resultados');

    // Function to remove highlights
    function removeHighlights() {
        const highlights = resumo.querySelectorAll('.highlight');
        highlights.forEach(span => {
            span.outerHTML = span.textContent;
        });
    }

    // Highlight words with specific number of letters
    letrasInput.addEventListener('input', () => {
        removeHighlights();
        const num = parseInt(letrasInput.value);
        if (isNaN(num) || num <= 0) return;

        const paragraphs = resumo.querySelectorAll('p');
        paragraphs.forEach(p => {
            let html = p.innerHTML;
            html = html.replace(/\b\w+\b/g, (word) => {
                if (word.length === num) {
                    return `<span class="highlight">${word}</span>`;
                }
                return word;
            });
            p.innerHTML = html;
        });
    });

    // Count occurrences of a word
    palavraInput.addEventListener('input', () => {
        const word = palavraInput.value.trim();
        if (!word) {
            resultados.textContent = '';
            return;
        }
        const text = resumo.textContent.toLowerCase();
        const wordLower = word.toLowerCase();
        const regex = new RegExp(`\\b${wordLower}\\b`, 'g');
        const count = (text.match(regex) || []).length;
        resultados.textContent = `A palavra "${word}" aparece ${count} vezes.`;
    });
});

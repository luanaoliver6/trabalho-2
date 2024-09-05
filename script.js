alternativas: [
    { texto: "Isso é assustador!", pontuacao: 1 },
    { texto: "Isso é maravilhoso!", pontuacao: 2 }
    ]alternativas: [
    { texto: "Isso é assustador!", pontuacao: 1 },
    { texto: "Isso é maravilhoso!", pontuacao: 2 }
    ]
    alternativas: [
        { texto: "Isso é assustador!", pontuacao: 1 },
        { texto: "Isso é maravilhoso!", pontuacao: 2 }
        ]alternativas: [
        { texto: "Isso é assustador!", pontuacao: 1 },
        { texto: "Isso é maravilhoso!", pontuacao: 2 }
        ]
        function exibePontuacaoFinal() {
            caixaPerguntas.textContent = `Você completou o questionário! Sua pontuação
            final é: ${pontuacao}`;
            alternativasContainer.innerHTML = ''; // Limpa as alternativas

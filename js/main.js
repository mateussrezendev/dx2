function calcularMaior() {
    const numMusicas = parseInt(document.getElementById('numMusicas').value);
    const vezesTocadas = document.getElementById('vezesTocadas').value.split(' ').map(Number);

    let i = 0;
    let maior = 0;

    while (i < numMusicas) {
        if (vezesTocadas[i] > maior) {
            maior = vezesTocadas[i];
        }
        i++;
    }

    document.getElementById('resultado').innerHTML = `<p>O maior número de vezes que uma música foi tocada é: ${maior}</p>`;
}

function alunos() {
    const quantidade = parseInt(prompt("Digite o número de alunos:"));
    let melhorNota = -1;
    let nomeMelhorAluno = "";

    for (let i = 0; i < quantidade; i++) {
        const entrada = prompt(`Digite o nome e a nota do ${i+1}º aluno (formato: Nome Nota):`).split(' ');
        const nome = entrada[0];
        const nota = parseFloat(entrada[1]);

        if (nota > melhorNota) {
            melhorNota = nota;
            nomeMelhorAluno = nome;
        }
    }

    const texto = document.querySelector("h1");
    const paragrafo = document.querySelector("p");

    texto.textContent = nomeMelhorAluno;
    paragrafo.textContent = `O Aluno com a maior nota é ${nomeMelhorAluno} com a nota ${melhorNota}`;
}

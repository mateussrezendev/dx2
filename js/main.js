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

function alunos(){
    
    const texto = document.querySelector("h1");
    const paragrafo = document.querySelector("p");
    
    quantidade = 3
    var nomeAluno1, nomeAluno2, nomeAluno3, nota1, nota2, nota3;
      
     quantidade =prompt("Digite a quantidade de alunos");
     nomeAluno1 = prompt("Digite o nome do 1° aluno ");
     nota1 = prompt("Digite a nota do 1° aluno ");
    
     nomeAluno2 = prompt("Digite o nome do 2° aluno ");
     nota2 = prompt("Digite a nota do 2° aluno ");
    
     nomeAluno3 = prompt("Digite o nome do 3° aluno ");
     nota3 = prompt("Digite a nota do 3° aluno ");
    
     if(nota1 > nota2 && nota1 > nota3 ){
        texto.innerHTML = nomeAluno1;
        paragrafo.innerHTML = "O Aluno com a maior nota é " + nomeAluno1 + " com a nota " + nota1;
    }
    else if(nota2 > nota1 && nota2 > nota3 ){
        texto.innerHTML = nomeAluno2;
        paragrafo.innerHTML = "O Aluno com a maior nota é " + nomeAluno2 + " com a nota " + nota2;
    }
    else if(nota3 > nota1 && nota3 > nota2 ){
        texto.innerHTML = nomeAluno3;
        paragrafo.innerHTML = "O Aluno com a maior nota é " + nomeAluno3 + " com a nota " + nota3;
    }
    
    }
    

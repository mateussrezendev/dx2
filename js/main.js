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
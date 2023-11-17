function calcularNivel() {
  var vitorias = parseInt(document.getElementById('vitorias').value);
  var derrotas = parseInt(document.getElementById('derrotas').value);

  var saldoVitorias = vitorias - derrotas;
  var nivel = '';

  if (vitorias < 10) {
    nivel = 'Ferro';
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = 'Bronze';
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = 'Prata';
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = 'Ouro';
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = 'Diamante';
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = 'Lendário';
  } else {
    nivel = 'Imortal';
  }

  var resultado = `O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`;
  document.getElementById('resultado').innerText = resultado;
}

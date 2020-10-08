var etanol, gasoline;

function calculate() {
  etanol = parseFloat(choice.selectEtanol.value.replace(',', '.'));
  gasoline = parseFloat(choice.selectGasoline.value.replace(',', '.'));

  if (etanol / gasoline <= 0.7) {
    document.getElementById('status').src = './src/etanol.png';
  } else {
    document.getElementById('status').src = './src/gasoline.png';
  }
}

function clean() {
  document.getElementById('status').src = './src/neutral.png';
}

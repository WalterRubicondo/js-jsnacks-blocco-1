// Stampa il cubo dei N numeri, dove N è un numero indicato dall'utente.

var numero = parseInt(prompt('Inserisci un numero'));

for (var i = 0; i <= numero; i++) {
  cubo = i * i * i;
  console.log(cubo);
}

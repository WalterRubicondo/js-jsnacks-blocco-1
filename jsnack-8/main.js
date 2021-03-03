// Chiedi un numerom di 4 cifre.
// Calcola la somma di tutte le cifre che compongono il numero.

var numero = prompt('Inserisci un numero di 4 cifre');

var somma=0;

for(i=0; i < 4 ; i++){
  somma = somma + parseInt(numero[i]);
}

console.log(somma);

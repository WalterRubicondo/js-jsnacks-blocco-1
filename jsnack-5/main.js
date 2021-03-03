// Crea un array vuoto
// Chiedi per 6 volte all'utente di inserire un numero
//Se è dispari inseriscilo nell'array

var lista = [];

for (var i = 0; i < 6; i++) {
  var numero = parseInt(prompt("Dimmi un numero"));
  if (numero %2) {
    lista.push(numero)
    console.log(lista);
  }
}

alert("Questi sono i numeri dispari inseriti " + lista)

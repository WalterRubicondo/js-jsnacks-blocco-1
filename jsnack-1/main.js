//L'utente inserisce due numeri in successione, con due prompt.
//Il software stampa il maggiore.

var numero = prompt("Inserisci un numero");

var numeroDue = prompt("Inserisci un secondo numero");

if (numero > numeroDue) {
  alert(numero + " è il numero maggiore")
} else if (numero < numeroDue) {
  alert(numeroDue + " è il numero maggiore")
} else {
  alert("I numeri " + numero + " " + numeroDue + " sono uguali")
}

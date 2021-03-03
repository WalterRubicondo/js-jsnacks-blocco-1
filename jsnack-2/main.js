// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

var frase = prompt("Inserisci una frase");

var fraseDue = prompt("Inserisci una seconda frase");

if (frase.length > fraseDue.length) {
  alert(fraseDue + " è la frase più corta mentre " + frase + "è più lunga" )
} else if (frase.length < fraseDue.length) {
  alert(frase + " è la frase più corta mentre " + fraseDue + "è più lunga" )
} else {
  alert("Le frasi sono uguali")
}

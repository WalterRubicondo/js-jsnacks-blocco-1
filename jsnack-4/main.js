// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby.
// Chiedi all'utente il suo nome
//Comunicagli se può partecipare o no alla festa

var nome = prompt("Come ti chiami?");

var invitati = ["Fabrizio", "Alessandro", "Raffaele", "Walter"];

var breakLoop = false;

for (var i = 0; i < invitati.length && !breakLoop; i++) {
  if (invitati[i] == nome) {
    breakLoop = true;
  }
}

if (breakLoop) {
  alert("Puoi entrare");
} else {
  alert("Non sei invitato");
}

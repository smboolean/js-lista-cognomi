// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi,
// stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo
// utente si trova.

// 1. definisco lista cognomi
var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
// 2. chiedo all'utente il suo cognome
var cognomeUtente = prompt("Inserisci il tuo cognome");
cognomeUtente = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1);
console.log(cognomeUtente);
// 3. inserisco il cognome nella lista
listaCognomi.push(cognomeUtente);
// 4. ordino la lista
listaCognomi.sort();
// 5. stampo la lista nel mio HTML
for (var i = 0; i < listaCognomi.length; i++) {
  //console.log(listaCognomi[i]);
  var lista = document.getElementById('lista').innerHTML;

  lista += "<li>" + listaCognomi[i] + "</li>";

  document.getElementById("lista").innerHTML = lista;
}
// 6. scrivo la posizione dell'utente nella lista ordinata
var posizione = listaCognomi.indexOf(cognomeUtente) + 1;
document.getElementById('posizione').innerHTML = "La posizone è: " + posizione;

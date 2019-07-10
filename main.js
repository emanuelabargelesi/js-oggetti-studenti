// -Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

//dichiaro le variabili
var studente, studenti;

//Creo oggetto studente
studente = {
  nome: 'Emanuela',
  cognome: 'Bargelesi',
  eta: '33'
};

//stampo il testo interno all'oggetto
var stampa = "";
for (x in studente) {
  stampa += studente[x] + " ";
}
document.getElementById('stampa').innerHTML = stampa;

//Crea array di oggetti studenti
// primo metodo
studenti = {
  'nome': ['Emanuela', 'Alessandro', 'Fabio'],
  'cognome': ['Bargelesi', 'Piras', 'Veronese'],
  'eta': [33, 36, 34]
};

//stampa
for (var i in studenti) {
  document.getElementById('stampaarray').innerHTML = studenti.nome + '<br /> ' + studenti.cognome + '<br />';
}

//aggiungi studente
domandanome = prompt('inserisci il tuo nome');
domandacognome = prompt('inserisci il tuo cognome');
domandaeta = parseInt(prompt('inserisci la tua età'));
studenti.nome.push(domandanome);
studenti.cognome.push(domandacognome);
studenti.eta.push(domandaeta);
document.write(studenti.nome + '<br />' + studenti.cognome);



//secondo metodo
// studenti = [
//   ['Emanuela', 'Bargelesi', 33],
//   ['Alessandro', 'Piras', 36],
//   ['Fabio', 'Veronese', 35]
// ]
//
// var stampastudenti = "";
// for (i = 0; i < studenti.length; i++) {
//   stampastudenti += ' ' + studenti[i][0] + ' ' + studenti[i][1] + '<br />';
// };
//
// document.getElementById('stampaarray').innerHTML = stampastudenti;
//
//
// domandanome = prompt('inserisci il tuo nome');
// domandacognome = prompt('inserisci il tuo cognome');
// domandaeta = parseInt(prompt('inserisci la tua età'));
// studenti.push(domandanome + domandacognome + domandaeta);
// console.log(studenti);

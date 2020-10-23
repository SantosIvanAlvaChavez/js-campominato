/*
 * Esercizio Campo minato
 */

function NumberRandom (min, max) {
  var newNumberRandom = Math.floor( Math.random() * max - min + 1 ) + min;
  return newNumberRandom;
}

// Creazione elemento in un array
function controlNumber (array, element) {
  var risultato = false;

  for (var i = 0; i < array.length; i++) {
    if (array[i] == element) {
      risultato = true;
    }
  }
  return risultato;
}

var boom = [];

// Ciclo While
while (boom.length < 16) {
  var pcNumber = NumberRandom(1,100);

  if (boom.includes(pcNumber) == false) {
    boom.push(pcNumber);
  }
}
console.log(boom);

var proseguiGioco = true;
var giocateVincenti = 0;
var numeriUser = [];

while (proseguiGioco == true) {
  var requiredNumber = parseInt( prompt('Inserisci un numero da 1 a 100') );
  var luckyNumber = controlNumber(numeriUser, requiredNumber);
  var unluckyNumber = controlNumber(boom, requiredNumber);

  if (luckyNumber == true) {
    alert('Inserisci un numero valido')
  }
  else {
    numeriUser.push(requiredNumber);
    if (unluckyNumber == true) {
      proseguiGioco = false;
    } else {
      giocateVincenti++ ;

      if (giocateVincenti >= 84) {
        proseguiGioco = false;
      }
    }
  }
}

//Risultato
if (giocateVincenti == 84) {
  alert('Complimenti: Hai Vinto!!!!!');
} else {
  alert('Mi dispiace ma hai perso!!\rIl numero totale di giocate effettuate è: ' + giocateVincenti);
}

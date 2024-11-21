//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*let num1 = parseFloat (prompt ("Inserisci un numero"))
let num2 = parseFloat (prompt ("Inserisci un secondo numero"))

let vincitore

if (num1>num2) {
  vincitore = num1
} else {
  vincitore = num2
}

console.log ("Il numero più grande è" + vincitore)


oppure


let num1 = 8
let num2 = 10

let vincitore

if (num1>num2) {
vincitore = num1
} else {
 vincitore = num2
}

*/







/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/


/*let num = prompt ("Inserisci un numero")
num = number

if (num < 5) {

console.log ("Tiny")

} else if (num < 10) {

 console.log ("Small")

} else if (num < 15) {

 console.log ("Medium")

} else if (num < 20) {
 
console.log ("Large")

} else {
 
console.log ("Huge") 

}
*/


//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* 
for (let i = 0 ; i=<10 ; i++) {
 if ((i === 3) || ( i === 8)) 
 {
 continue
}
 console.log (i)
 */

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* 
for (let i = 0; i<15; i++) {
 if (i % 2 === 0) { 
 console.log ("Pari")}
 else {
 console.log ("Dispari")
}
 }
*/

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* 
let num1 = prompt ("Inserisci un numero")
let num2 = prompt ("Inserisci un numero")

num1= number
num2 = number

let vincitore

if (num1 === 8) {
 vincitore = num1
} else {
 vincitore = num2
 } 

 console.log (vincitore)

if (num1 + num2 === 8) {
 vincitore = (num1 + num2)
 } else if (num1 - num2 === 8) {
  vincitore = (num1-num2)} else {
  vincitore = (num2 - num1)
  }

  console.log (vincitore)




/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* 
 let totalShoppingCart = prompt ("Saldo totale del carrello")
 totalShoppingCart = number

 if (totalShoppingCart > 50) {
 alert ("Hai diritto alla spedizione gratuita")
 } else {
  alert ("La tua spedizione ha un costo di 10 euro")}
 
*/

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* 
let totalShoppingCart = {
 prodotto1 = 20
 prodotto2 = 40
 prodotto3 = 56
 }

 console.log (totalShoppingCart * 20 / 100)
 ............
totaleShoppingCart = number 


*/

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI LA TUA RISPOSTA
*/

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
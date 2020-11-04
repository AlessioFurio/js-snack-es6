//Creare un array di nomi
// e chiedere all'utente due numeri.
// Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall'utente.

const array = ['Alessio', 'Flavio', 'Simone', 'Cecilia'];

var numero1 = parseInt(prompt('inserisci un valore tra 0 e 3'));
var numero2 = parseInt(prompt('inserisci un valore tra 0 e 3'));

const newArray = [];

// array.forEach((element, index) => {
//     if (numero1 <= index && numero2 >= index) {
//         newArray.push(element);
//     }
// });
// console.log(newArray);

const newArrayFilter = array.filter((element, index) =>{
    return numero1 <= index && numero2 >= index;
});

console.log(newArrayFilter);

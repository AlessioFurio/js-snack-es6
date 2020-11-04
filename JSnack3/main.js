//A partire da un array di oggetti,
//creare una copia dell'array e
//aggiungere ai singoli elementi dell'array una nuova proprietà "position"
// che contiene una lettera casuale.

const stringGen = (len) => {
    let text = "";

    let charset = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < len; i++)
    text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
}

const array = [
        {
            nome: 'Alessio',
            cognome: 'Furio',
            eta: 27
        },
        {
            nome: 'Matteo',
            cognome: 'Del Re',
            eta: 27
        },
        {
            nome: 'Michele',
            cognome: 'Settanni',
            eta: 27
        }
];

const arrayCopia = array.map((element, index) => {
    return element
});
console.log(arrayCopia);

arrayCopia.forEach((item, i) => {
    item.position = stringGen(1);
});



// const arrayCopia = [];
//
// for (let i = 0; i < array.length; i++) {
//
//     let studenteCopia = {};
//     for (let key in array[i]) {
//         studenteCopia[key] = array[i][key];  // ogni chiave dell' oggetto in posizione array[i] verra copiata nell oggetto studenteCopia[key]
//         studenteCopia['position'] = stringGen(1);
//     }
//     arrayCopia.push(studenteCopia);
// }
//
// console.log(`
//     l'array di partenza: ${array}
//     `);
// console.log(`
//     l'array copia: ${arrayCopia}
//     `);
//
// console.log(JSON.stringify(arrayCopia));


// Creare un array di oggetti:
// ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const vektor = {nome: 'vektor', peso: 10}
const aliens = {nome: 'aliens', peso: 14}
const atala = {nome: 'atala', peso: 16}

const arrayBici = [vektor, aliens, atala];
console.log(arrayBici);


let biciLeggera = arrayBici[0];

arrayBici.forEach((bici) => {

    if(bici.peso < biciLeggera.peso){

        biciLeggera = element;
    }
});

const {peso, nome} = biciLeggera;
console.log(
    `
     La bici con peso minore si chiama: ${nome} ed ha il peso di: ${peso}kg
    `);

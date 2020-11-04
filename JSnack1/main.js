
// Creare un array di oggetti:
// ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const arrayBici = [
    {
        nome: 'vektor',
        peso: 8
    },
    {
        nome: 'aliens',
        peso: 10
    },
    {
        nome: 'atala',
        peso: 9
    }
];

console.log(arrayBici);

let pesoMinimo = arrayBici[0]['peso'];
let biciPesoMinimo = arrayBici[0]['nome'];
let pesoCorrente;
let biciCorrente;

arrayBici.forEach((bici, i) => {

    pesoCorrente = bici['peso'];
    biciCorrente = bici['nome'];

    if(pesoCorrente < pesoMinimo){
        pesoMinimo = pesoCorrente;
        biciPesoMinimo = biciCorrente;
    }
});
console.log(pesoMinimo);
console.log(biciPesoMinimo);
console.log(
    `
     La bici con peso minore si chiama : ${biciPesoMinimo} ed ha il peso di: ${pesoMinimo}kg
    `);

// var numero = parseInt(prompt('inserisci numero'));
// if (numero % 2 == 0 ){
//     console.log(numero);
// }
// else{
//     console.log(numero + 1);
// // }
// var nomi = ['Cip', 'Ciop', 'Ciap'];
// var cognomi = ['Qui', 'Quo', 'Qua'];
// var lista = [];
// var cognomi_1;
// var nome_1;
// for ( var i = 0; i < nomi.length; i++){
//     nome_1 = nomi[Math.floor(Math.random()*nomi.length)];
//     cognomi_1 = cognomi[Math.floor(Math.random()*nomi.length)];
//     lista.push(nome_1 + ' ' + cognomi_1)

// }
// console.log(lista);
// var lunghezza= prompt('quanti numeri vuoi mettere?');
// var sommoIdispari= [];
// var somma = 0;
// for (var i = 0; i < lunghezza; i++){
//     sommoIdispari.push(parseInt(prompt('metti numero'))); 
// }
// for (var i = 0; i < sommoIdispari.length; i = i + 2){
//     somma = somma + sommoIdispari[i];
// }
// console.log(somma);
var lunghezza_1= prompt('quanto lungo il primo vettore?');
var lunghezza_2= prompt('quanto lungo il secondo vettore?');
var vettore_1= [];
var vettore_2= [];
var delta = 0;
for (var i = 0; i < lunghezza_1; i++){
    vettore_1.push(0); 
}
console.log(vettore_1);
for (var i = 0; i < lunghezza_2; i++){
    vettore_2.push(1); 
}
console.log(vettore_2);
if (lunghezza_1 < lunghezza_2){
    delta = lunghezza_2 - lunghezza_1;
    for (var i = 0; i < delta; i++){
        vettore_1.push(0);
    }

}
else if (lunghezza_1 > lunghezza_2){
    delta = lunghezza_1 - lunghezza_2;
    for (var i = 0; i < delta; i++){
        vettore_2.push(1);
    }

}
console.log(vettore_2);
console.log(vettore_1);
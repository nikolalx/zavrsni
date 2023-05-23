// 1. Napraviti program koji simulira igru papir, kamen, makaze koristeci random vrednost. Pobednik je onaj koji osvoji tri pobede(random vrednost odredjuje da li ce racunar odigrati neku od tri mogucnosti).

// let poeniKomp = 0

// let poeniKorisnik = 0


// while (poeniKomp !== 3 && poeniKorisnik !== 3) {

//     let broj = Math.ceil(Math.random() * 3) //random odabir za komp
//     let broj1 = Math.ceil(Math.random() * 3) //random odabir za korisnika

//     let korisnik = ''
//     let komp = ''


//     if (broj === 1) {
//         komp += 'kamen'
//         console.log(`Komp je odabrao ${komp}`);
//     } else if (broj === 2) {
//         komp += 'papir'
//         console.log(`Komp je odabrao ${komp}`);
//     } else if (broj === 3) {
//         komp += 'makaze'
//         console.log(`Komp je odabrao ${komp}`);
//     }

//     if (broj1 === 3) {
//         korisnik += 'kamen'
//         console.log(`Korisnik je odabrao ${korisnik}`);
//     } else if (broj1 === 2) {
//         korisnik += 'papir'
//         console.log(`Korisnik je odabrao ${korisnik}`);
//     } else if (broj1 === 1) {
//         korisnik += 'makaze'
//         console.log(`Korisnik je odabrao ${korisnik}`);
//     }



//     if (komp === 'kamen' && korisnik === 'makaze' || komp === 'papir' && korisnik === 'kamen' || komp === 'makaze' && korisnik === 'papir') {
//         poeniKomp += 1
//         console.log(`1 Poen za komp!!`);
//         console.log(``);

//     } else if (komp === korisnik || korisnik === komp) {
//         console.log(`NERESENO`);
//         console.log(``);

//     } else {
//         poeniKorisnik += 1
//         console.log(`1 Poen za korisnika!!`);
//         console.log(``);

//     }

// }

// if (poeniKomp > poeniKorisnik) {
//     console.log(``);
//     console.log(`Pobednik je Komp!`);
// } else {
//     console.log(``);
//     console.log(`Pobednik je Korisnik!`);
// }


//2. Marko i Ognjen igraju pola-celo. Imaju po 5 slicica i pobednik je onaj koji kroz igru osvoji sve protivnikove slicice. Igra je osmisljena tako da
// se generise random vrednost koja ce da proglasi pobednika runde. Ukoliko je random vrednost manja od 0.5, pobednik runde je Marko i on u svom
// spilu treba da ima slicicu vise, koju je upravo osvojio. Ukoliko je random vrednost veca od 0.5, Ognjenov saldo se povecava za jednu slicicu vise. Ako se desi
// random vrednost tacno 0.75 ili 0.25, igra menja koncept. Tada igraju u 2 slicice i generise se nova random vrednost koja ce, po vec datom principu 0.5, proglasiti
// pobednika date runde i povecati broj slicica u spilu igraca koji je pobedio. Proglasiti pobednika na kraju igre.

//Marko 5 slicica

//Ognjen 5 slicica

//pobednik = jedan od njih sa 10 slicica

//po rundama. random br ako br < 0.5 Marko pobednik +1 slicica, Ognjen -1 slicicu

//aako random br > 0.5 Ognjen +1 slicicu, Marko -1 slicicu

//ako 0.75 || 0.25 ide novi random br koji gleda isto kao i prvi... ako < 0.5 Marko +2 slicice, ako > 0.5 Ognjen +2 slicice

// let Marko = 5
// let Ognjen = 5



// while (Marko !== 10 && Ognjen !== 10) {

//     let broj = Math.floor(Math.random() * 100) / 100 // od 1 do 100 floor je od 0 do 99. / 100 je onda od 0.00 do 0.99

//     let broj1 = Math.floor(Math.random() * 100) / 100

//     if (broj === 0.25 || broj === 0.75 && broj1 < 0.5) {
//         Marko += 2
//         Ognjen -= 2
//         console.log(`Marko je oteo Ognjenu dve karte`, Marko, Ognjen);
//         console.log(``);
//         continue //ako se ispunio zahtev, preskoci sledece i nastavi sa sledecom iteracijom
//     } else if (broj === 0.75 || broj === 0.25 && broj1 > 0.5) {
//         Marko -= 2
//         Ognjen += 2
//         console.log(`Ognjen je oteo Marku dve karte`, Marko, Ognjen);
//         console.log(``);
//         continue
//     }
//     else if (broj < 0.5) {
//         Marko += 1
//         Ognjen -= 1
//         console.log(`Marko je oteo Ognjenu jednu kartu`, Marko, Ognjen);
//         console.log(``);
//         continue
//     } else if (broj > 0.5) {
//         Marko -= 1
//         Ognjen += 1
//         console.log(`Ognjen je oteo Marku jednu kartu`, Marko, Ognjen);
//         console.log(``);
//         continue
//     }
// }

// if (Marko === 10) {
//     console.log(`Marko je pobednik sa ${Marko} karata!`);
// } else if (Ognjen === 10) {
//     console.log(`Ognjen je pobednik sa ${Ognjen} karata!`);
// }

//Napraviti sledece strukture za n=5:

//Pod A
// ---------------------------------------------------------------------------------

// 1 2 2 2 3
// 2 1 2 3 4
// 2 2 1 4 4
// 2 3 4 1 4
// 3 4 4 4 1

//sve dok je j === i stampaj 1 ili n / n?
// let n = 6

// let str = ''

// for(let i = 1; i <= n; i++){
//     str = ''
//     for(let j = 1; j <= n; j++){
//         if (j === i) {
//             str += `${n / n} `
//         } else  if(i + j === n + 1){
//             str += '3 '
//         } else if(i + j <= n) {
//             str += '2 '
//         } else if(i + j >= n){
//             str += '4 '
//         }
//     }
//     console.log(str);
// }

// ------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// pod B

//        *
//       * *
//      * * *
//     * * * *
//    * * * * *
//   * * * * * *

// let n = 5

// for(let i = 0; i < n; i++){
//     str1 = ''
// for(let j = 1; j <= n; j++){
//     if(j < n - i){
//         str1 += ' '
//     } else {
//         str1 += '* '
//     }
// }
// console.log(str1);
// }
//---------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------
// pod C

// * * * * *
// *       *
// * * * * *
// *       *
// * * * * *

// let n = 7

// let str = ''

// for(let i = 0; i < n; i++){
//     str = ''
//     for(let j = 0; j < n; j++){
//         if (n % 2 !== 0 && i === Math.floor(n / 2)) {
//             str += '* '
//         }else if (i === 0 || i === n - 1) {
//             str += '* '
//         } else if(j === 0 || j === n - 1){
//             str += '* '
//         } else {
//             str += '  '
//         }
//     }
//     console.log(str);
// }

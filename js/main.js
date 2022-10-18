"use strict";
console.log("main.js");

// [08:08] Marius Kuzminskas
// // parasyti funkcija kuri sudaugina 3 reiksmes su isklotine
//  like 1

// function daugyba(num1,num2,num3){
//     if (num3 !=undefined) {
//         let sum=num1*num2*num3;
//         console.log(sum);
//     } else if (num2 !=undefined)  {
//         let sum=num1*num2;
//         console.log(sum);
//     } else {
//         console.log(num1);
//     }

//     // let sum=num1*num2*num3;
//     // console.log(sum);

// }
// daugyba(2,2,2)
// // let x;
// // console.log(x)
// daugyba(2,2)
// daugyba(5)

// [08:08] Marius Kuzminskas
// // jei reiksme nepaduoda tai daugypa turetu ivykti su paduotom reikmes
//  like 1

// [08:58] Marius Kuzminskas
//     // sukurti funkcija kurti isveda vidurki is gautu 3 parametru
// (1 liked)​[08:58] Marius Kuzminskas

// function vidurkis(num1,num2,num3){
// let average=(num1+num2+num3)/3;
// let printText =`(${num1} + ${num2} + ${num3}) / 3 =  ${average}`;
// let h2El = document.createElement('h2');
// // pridetiti reiksem i el
// h2El.textContent = printText;
// // patalpinti elementa htmle
// // document.body.append(h2El);
// document.body.append(h2El);
// }

// vidurkis(5,7,10);
// vidurkis(11,100,33);
// vidurkis(-5,77,-8710);

//     // ir atspausdina ji htmle, panaudojant makeH2El()
// // su isklotine

// function makeH2El(printText = 'iveskite texta') {
//     // sukurti elementa
//     const h2El = document.createElement('h2');
//     // pridetiti reiksem i el
//     h2El.textContent = printText;
//     // patalpinti elementa htmle
//     // document.body.append(h2El);
//     document.body.append(h2El);
//   }

// (1 liked)​[08:58] Marius Kuzminskas
//     // panaudoti su keletu reiksmiu
// (1 liked)<https://teams.microsoft.com/l/message/19:_QMTbjYqDqM2VqyaRF3TikiMD1ITlegQHCz15fesiDM1@thread.tacv2/1666076295072?tenantId=08455b90-5d90-4a89-937b-8c2322b2c786&amp;groupId=a136d85b-b246-4217-9ff5-23f33d8a1f9b&amp;parentMessageId=1665374004855&amp;teamName=FEU2&amp;channelName=General&amp;createdTime=1666076295072&amp;allowXTenantAccess=false>

// parasyti funkcija kuri argumentais paima kambario sienu ilgi ploti ir auksti ir paskaiciuoja sienu plota.
// function plotasF(ilgis, plotis, aukstis) {
//   let plotas = (ilgis + plotis) * 2 * aukstis;
//   console.log("plotas ===", plotas);
//   return plotas;
// }

// // padaryti kad sienu plota funkcija grazintu

// let pirmoKambarioPlotas = plotasF(10, 10, 10);
// console.log("pirmoKambarioPlotas ===", pirmoKambarioPlotas);
// plotasF(5, 25, 18);

// paskaiciuoti triju skirtingu kambariu sienu plotus ir juos atspausdinti i html su pries tai aprasyta funkcija.

// Print function
function PrintToHtml(elementas) {
  const h2El = document.createElement("h2");
  h2El.textContent = elementas;
  document.body.append(h2El);
}

function siena(ilgis, aukstis) {
  let plotas = `ilgis ${ilgis} * aukstis ${aukstis} = plotas ${
    ilgis * aukstis
  }`;
  PrintToHtml(plotas);
  return plotas;
}

let siena1 = siena(5, 10);
// console.log("siena1 ===", siena1);
// PrintToHtml(siena1);

let siena2 = siena(15, 8);
// console.log("siena2 ===", siena2);
// PrintToHtml(siena2);

let siena3 = siena(13, 100);
// console.log("siena3 ===", siena3);
// PrintToHtml(siena3);

//     1.parasyti funkcija multi kuri sudaugina pirma parametra su antru ir grazina

//     2.parasyti funkcija divide kuri padalina pirma parametra is antro ir grazina

//     3.parasyti funkcija avg kuri gauna 2 parametrus ir grazina ju vidurki

//     4.parasyti funkcija flow() kurioje sudedam visu auksiau aprasytu funkciju rezultatus ir grazinam ir ispausdinam konsoleje.

//     ikelta septinta paskaita prie klases medziagos ten yra daugiau uzdaviniu kas noresit
// <https://teams.microsoft.com/l/message/19:_QMTbjYqDqM2VqyaRF3TikiMD1ITlegQHCz15fesiDM1@thread.tacv2/1666080228022?tenantId=08455b90-5d90-4a89-937b-8c2322b2c786&amp;groupId=a136d85b-b246-4217-9ff5-23f33d8a1f9b&amp;parentMessageId=1665374004855&amp;teamName=FEU2&amp;channelName=General&amp;createdTime=1666080228022&amp;allowXTenantAccess=false>

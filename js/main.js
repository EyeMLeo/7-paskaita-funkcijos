'use strict'
console.log('main.js');



// [08:08] Marius Kuzminskas
// // parasyti funkcija kuri sudaugina 3 reiksmes su isklotine
//  like 1




function daugyba(num1,num2,num3){
    if (num3 !=undefined) {
        let sum=num1*num2*num3;
        console.log(sum);
    } else if (num2 !=undefined)  {
        let sum=num1*num2;
        console.log(sum);
    } else {
        console.log(num1);
    }


    // let sum=num1*num2*num3;
    // console.log(sum);
    
}
daugyba(2,2,2)
// let x;
// console.log(x)
daugyba(2,2)
daugyba(5)


// [08:08] Marius Kuzminskas
// // jei reiksme nepaduoda tai daugypa turetu ivykti su paduotom reikmes
//  like 1


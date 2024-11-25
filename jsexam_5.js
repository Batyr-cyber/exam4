//1. Тапсырма: Қарапайым калькулятор
// let num1 = +prompt("1-shy san engyz:");
// let num2 = +prompt("2-shy san engyz:");
// let sum1 = 0;
// let sum2 = 0;
// let sum3 = 0;
// let sum4 = 0;
// sum1 = parseInt(num1) + parseInt(num2);
// sum2 = parseInt(num1) - parseInt(num2);
// sum3 = parseInt(num1) * parseInt(num2);
// sum4 = parseInt(num1) / parseInt(num2);
// alert("Eki san kosyndysy: " + sum1 + '\n' + "Eki san aiyrmasy: " + sum2 + '\n' + "Eki san kobeitindisi:" + sum3 + '\n' + "Eki san bolindisi: " + sum4);


//tapsyrma 3
// let san = parseInt(Math.random() * 100);
// console.log(san);
// while (true) {
//     let num1 = +prompt("San tap")
//     if (san == num1) {
//         alert("Dyrys");
//     }
//     if (num1 - san <= 5 && san - num1 <= 5) {
//         alert("Zhakun")
//     } else {
//         alert("Alys")
//     }
// }



// 2. Тапсырма: Супермаркеттің жеңілдіктері
function skidka() {
    let num1 = +prompt("san engiz:")
    let i = 1;
    while (true) {
        if (num1 > 5000 ) {
            alert(num1 * 0.9)
        } else if (num1 > 10000) {
            num1 * 0.8
        } else if (num1 > 20000) {
            num1 * 0.7
        }
        i++
    }
}
skidka();

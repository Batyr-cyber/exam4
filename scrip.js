// Тапсырма A: Ай атауын шығару
// let a = +prompt("Ай санын енгыз")

// if (a == 1 || a == 12 || a == 2) {
//     alert("Winter")
// } else if (a == 3 || a == 4 || a == 5) {
//     alert("Spring")
// } else if (a == 6 || a == 7 || a == 8) {
//     alert("Summer")
// } else if (a == 9 || a == 10 || a == 11) {
//     alert("Autumn")
// } else {
//     alert("1 жыл 12 айдан тұрады 1 - ден 12- ге дейін сан еңгіз")
// }


//Тапсырма B: Екі санды салыстырып, орташа мәнді табу

//  let a = +prompt("a sanyn engiz")
//  let b = +prompt("b sanyn engiz")
//   switch (true) {
//      case (a > b):
//          alert("a саны b санынан үлкен")
//          break;
//      case (b > a):
//          alert("b саны a санынан үлкен")
//          break;
//       default :
//          alert("Eki san ten")
//          break;
//  }
//  alert("Ortasha mani: " + (a + b) / 2)

//Тапсырма C: Үш санды салыстыру

let a = +prompt("san engiz")
let b = +prompt("san engiz")
let c = +prompt("san engiz")

if (a > b && a > c) {
    alert(a)
} else if (b > a && b > c) {
    alert(b)
} else if (c > a && c > b) {
    alert(c)
} else {}
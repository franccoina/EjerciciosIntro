// David Francisco Blandón Mena
// Clan Gates, RIWI
// 21.04.2024

// EJERCICIOS JS: Adivinanza

function getRandomInt() {
    return Math.floor(Math.random() * 10);
}

let add = getRandomInt(10)
let num = parseInt(prompt("Ingresa el numero de 0-9 que crees que sacó la máquina:"))

while (add != num){
    if (add>num){
        console.log("Su numero es menor al numero de la maquina");
        num = parseInt(prompt("Ingresa de nuevo el numero que crees que sacó la máquina:"))
    }
    else{
        console.log("Su numero es mayor al numero de la maquina");
        num = parseInt(prompt("Ingresa de nuevo el numero que crees que sacó la máquina:"))
    }
}

console.log(`¡Adivinaste! Escribiste ${num} y es igual al número de la maquina`)

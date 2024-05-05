// David Francisco Blandón Mena
// Clan Gates, RIWI
// 21.04.2024

// EJERCICIOS JS: Notas

let notas=[]
let suma = 0;

for (let i = 0; i < 5; i++) {
    let nota= parseFloat(prompt("Ingrese la nota"));
    notas.push(nota)
    suma += nota
}
let prom = suma / notas.length
console.log(prom);
console.log(notas)

if(prom>=3){
    console.info("El estudiante aprobo");
}else{
    console.info("El estudiante no aprobo");
}
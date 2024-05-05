// David Francisco Blandón Mena
// Clan Gates, RIWI
// 21.04.2024

// EJERCICIOS JS: Calculadora

let num1 = parseFloat(prompt("Ingrese el primer valor"));
let num2 = parseFloat(prompt("Ingrese el segundo valor"));

console.info("Operaciones Aritméticas")

let ansSum=num1+num2;
console.log(`El resultado de la suma de ${num1} y ${num2} es: ${ansSum}`);

let ansRes=num1-num2;
console.log(`El resultado de la resta de ${num1} y ${num2} es: ${ansRes}`);

let ansMult=num1*num2;
console.log(`El resultado de la multiplicación de ${num1} y ${num2} es: ${ansMult}`);

if (num2!=0){
    let ansDiv=num1/num2;
    console.log(`El resultado de la división de ${num1} y ${num2} es: ${ansDiv}`);
}
else{
    console.error(`Recuerda que no se puede dividir entre 0. Tu resultado sería infinito...`);
}
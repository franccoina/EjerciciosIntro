// David Francisco Blandón Mena
// Clan Gates, RIWI
// 21.04.2024

// EJERCICIOS JS: Andentrandonos a la Juventud

let age = parseInt(prompt("Escriba su edad"));

if (age < 18) {
    console.error("Aun eres menor de edad")
} else if (age >= 18 && age <= 24) {
    console.info("Bienvenido la juventud!")
} else {
    console.log("Saludos!!")
}
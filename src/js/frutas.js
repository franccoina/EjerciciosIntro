// David Francisco Blandón Mena
// Clan Gates, RIWI
// 21.04.2024

// EJERCICIOS JS: Frutas

let frutas=["fresa", "toronja", "limon", "banana","mango"]

let acid=[]
let dulce=[]

console.info("A continuación la lista de frutas:")

for (i in frutas){
    
    console.info(frutas[i])
    if(frutas[i]==="limon"||frutas[i]==="toronja"){
        acid.push(frutas[i])
    }
    else{
        dulce.push(frutas[i])
    }
}
console.group("CLASIFICACIÓN:")
console.table(acid)
console.table(dulce)

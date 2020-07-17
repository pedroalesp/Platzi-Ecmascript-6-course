//--------------------MÉTODO INCLUDES-----------------------
//Funciona para saber si hay algún valor en un array o un string que queramos, anteriormente usabamos indexOf()
let numbers = [1, 2, 3, 4, 5, 6, 7]

if (numbers.includes(6)) {
    console.log('Si hay un 6')
} else {
    console.log('El valor que buscas no está aquí')
}
//---------------------ELEVAR A LA POTENCIA---------------------------------------

let base = 4
let exponente = 3
let result= base ** exponente
console.log(result)
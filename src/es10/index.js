//---------------------------ARRAY.FLAT---------------------------------------
//Crea una matriz de datos con cualquier submatriz aplanada
//flat() recibe como argumento la profundidad, si se deja vacío corresponde a solo un nivel
//si le pasas 2 en este caso se trabajaría con toda la profundidad

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]]
console.log(array.flat(2))

//---------------------------FLATMAP---------------------------------------
//Obtenemos una matriz de datos con los valores modificados, recuerda que map recibe una función
//En este caso la funcion recibe un valor y regresa una matriz con los mismos valores seguido de si mismos multiplicados por 2

let array = [1, 2, 3, 4, 5]
console.log(array.flatMap(value => [value, value * 2 ]))

//-----------------------TRIMSTART()------------------------------------------
//elimina los espacios en blanco de un string

let hello = '          hello world'
console.log(hello)
console.log(hello.trimStart())

//-------------------------TRIMEND----------------------------------------
//elimina los espacios al final del texto
let hello = 'hello world          '
console.log(hello)
console.log(hello.trimEnd())

//-------------------------          ----------------------------------------
//Pasar de forma opcional el parámetro de error a catch

catch {
    error
}

//---------------------OBJECT.FROMENTRIES()-------------------------------------------
//Transformar un array a un objeto. recibe como parámetro al array

let entries = [['name', 'Pedro'], ['age', 23]]//un array de dos elementos

console.log(Object.fromEntries(entries))

//-------------------------------SYMBOL()--------------------------------------------
//Objeto de tipo simbolo que nos va a permitir acceder a una descripción

let mySymbl = 'My Symbol'
let symbol = Symbol(mySymbl) //este es el objeto de tipo símbolo

console.log(symbol.description)
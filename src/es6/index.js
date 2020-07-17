//------PARÁMEROS POR DEFECTO en es6--------------//
function newFunction (name = 'Pedro', age = 23, country = 'VE') {
    console.log(name, age, country)
}

newFunction() //Si no le pasamos parámetros, se mostrarán los establecidos por defecto
newFunction('Graciel', 24, 'VE')//Pero también podemos hacer que muestre los valores que queremos de esta forma 

//---------------MULTILINEAS----------------------------------------------
//Esta es la forma vieja y anticuada de hacer saltos de línea
let frase = 'Quiero escribir una frase épica \n' 
+ 'pero no tengo mucha imaginación'
//es6
let frase2 = `Esta es otra frase épica 
sin mucha imaginación de todos modos`
console.log(frase)
console.log(frase2)

//-------------DESTRUCTURACIÓN DE OBJETOS------------

let person = {
    name: 'Pedro',
    age: 23,
    country: 'Ve'
}
console.log(person.name, person.age)//Forma antigua de destructurar y solicitar objetos

let {name, age, country} = person//Este objeto es equivalente a person, de esta forma es mas amigable solicitar los valores
console.log(name, age, country)

//---------------PROPAGACIÓN------------

let team1 = ['Pedro', 'Gustavo', 'Jesus']
let team2 = ['Samuel', 'Juan', 'Rafa']

let finalTeam = ['Graciel', ...team1, ...team2]

console.log(finalTeam)

//-----------VARIABLES Y SCOPE--------------

{
    var globarVar = 'variable global'
}

{
    let globalLet = 'variable local'
    console.log(globalLet)
}

console.log(globarVar)

//La única forma de acceder al let seía dentro de su propio bloque de código, ya que se limita al scope donde es asignado

const a = 'b'
a = 'a'

console.log(a) //Esto no va a ser posible porque const no permite la reasignación de sus valores

//-------------------OBJETOS MEJORADOS -------------------------

let name = 'Pedro'
let age = 23

obj = {name: name, age: age}//Esta es la forma antigua de agrupar los valores en un objeto

obj2 = {name, age}//es6. Esto es equivalente a lo de arriba, de esta forma tomará los valores indicados
console.log(obj)
console.log(obj2)

//-------------------------ARROW FUNCTIONS------------------------

const names = [
    {name: 'Pedro', age: 23},
    {name: 'Graciel', age: 24}
]
//antes:
let listOfNames = names.map( function (item) {
    console.log(item.name)
})

//es6
let listOfNames2 = names.map( item => { console.log(item.name) } )

const square = number => number * number //Una variable que se le asigna una función anónima que va a recibir un numero y multiplicarlo por si mismo 

//------------------PROMESAS-------------------------------------------

const helloPromise = () =>  {
    return new Promise( (resolve, reject) => {
        if (true) {
            resolve('hey!! soy una promesa')
        } else {
            reject('upss :(')
        }
    })
}
//Todo lo de arriba es la forma de declarar una promesa: se declara una arrow function que va a retornar una nueva promesa con dos valores
//resolve y reject, que estarán a la espera de una lógica que se va a ejecutar.
//Ahora, la forma de llamarla es la siguiente:
helloPromise()
 .then(response => console.log(response))//Obtendremos este valor si se cumple la promesa
 .catch(err => console.log(err))//Obtendremos este valor si se rechaza

//---------------------------CLASES Y MÉTODOS-------------------------------------

class Calculator {
    constructor() { //El constructor es el método para inicializar nuestra clase. Adentro se asignan las variables que estarán disponibles en un scope global
        this.valueA = 0
        this.valueB = 0
    }

    sum(valueA, valueB) {
        this.valueA = valueA //Las variables las vamos a igualar al valor que estamos recibiendo
        this.valueB = valueB
        return valueA + valueB
    }
}

const calc = new Calculator()
console.log(calc.sum(3,3))

//-----------------MÓDULOS, IMPORT Y EXPORT------------------------------------------
//Se usan para separar, traer o llevar lógica según se requiera

/*import {hello} from './modulos' Esta forma es la usada en es6 pero no funciona porque
hello()                             no está soportada en la versión de node LTS
*/

const hello = require('./module') //Esta es la forma antigual pero segura
hello()

//---------------GENERATORS-------------------------------
//Es una función especial que retorna una lógica según el algoritmo definido. Tiene la mis aestructura de una función pero con un *
//yiel es una palabra reservada que retorna un valor según sea el caso, y puede recordar el step de la lógica en el que está
//La función se ejecuta guardandola en una const y luego con el método next() que hará referencia a los steps de la lógica y .value para obtener el valor de yield
function* HelloWorld () {
    if (true) {
        yield 'Hello'
    } 
    if (true) {
        yield 'World!'
    }
}

const generatorHello = HelloWorld ()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)//este caso retornará undefined porque no hay un 3er paso